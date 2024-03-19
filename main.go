package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"io/fs"
	"log"
	"math/rand"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

const isChinaMode = true

var (
	zhMap, enMap      map[string]string
	zhStr, enStr      func(string) string
	addr              = ":8080"
	langNeedUpdate    = false
	markdownConverter = NewMarkdownConverter()
)

func init() {
	log.SetFlags(log.Lshortfile)
}

func main() {
	//str func
	enMap = loadLangJson("lang/en.json")
	autoUpdateLang := func(s string) {
		v := toUpperCamelCase(s)
		if _, ok := zhMap[s]; !ok {
			zhMap[s] = v
			langNeedUpdate = true
		}
		if _, ok := enMap[s]; !ok {
			enMap[s] = v
			langNeedUpdate = true
		}
	}
	enStr = func(s string) string {
		if s[0] >= 'A' && s[0] <= 'Z' {
			log.Fatal("invalid str with upper case: " + s)
		}
		defer autoUpdateLang(s)
		v, ok := enMap[s]
		if ok {
			return v
		}
		return toUpperCamelCase(s)
	}
	zhMap = loadLangJson("lang/zh.json")
	zhStr = func(s string) string {
		if s[0] >= 'A' && s[0] <= 'Z' {
			log.Fatal("invalid str with upper case: " + s)
		}
		defer autoUpdateLang(s)
		v, ok := zhMap[s]
		if ok {
			return v
		}
		v, ok = enMap[s]
		if ok {
			return v
		}
		return toUpperCamelCase(s)
	}

	http.HandleFunc("/articles/", articles)
	http.HandleFunc("/help.html", help)
	http.HandleFunc("/zh/help.html", help)
	http.HandleFunc("/en/help.html", help)
	http.HandleFunc("/a/", a)
	http.HandleFunc("/", home)

	http.HandleFunc("/res/", func(w http.ResponseWriter, r *http.Request) {
		file := strings.TrimPrefix(r.URL.Path, "/")
		mime := getMime(file)
		fi, e := os.Open(file)
		if e != nil {
			http.Error(w, e.Error(), 500)
			return
		}
		defer fi.Close()
		w.Header().Set("Content-Type", mime)
		// buf := new(strings.Builder)
		_, e = io.Copy(w, fi)
		if e != nil {
			log.Panic(e)
			return
		}
	})

	// build
	e := tryBuild()
	if e != nil {
		log.Panic(e)
		return
	}

	println("http://" + addr)
	e = http.ListenAndServe(addr, nil)
	if e != nil {
		log.Panic(e)
		return
	}
}
func getTemplate(r *http.Request) (*template.Template, error) {
	t := template.New("func").Funcs(template.FuncMap{
		"str":        str(r),
		"getRoute":   getRoute(r),
		"startsWith": strings.HasPrefix,
		"endsWith":   strings.HasSuffix,
		"add": func(a, b int) int {
			return a + b
		},
	})
	t, e := t.ParseGlob("./*.html")
	if e != nil {
		return nil, e
	}
	t, e = t.ParseGlob("./a/*.html")
	if e != nil {
		return nil, e
	}
	t, e = t.ParseGlob("./articles/*.html")
	if e != nil {
		return nil, e
	}

	return t, nil
}
func getMime(s string) string {
	ext := strings.TrimPrefix(filepath.Ext(s), ".")
	switch ext {
	case "css", "html":
		return "text/" + ext
	case "js":
		return "text/javascript"
	case "webp", "png", "jpg", "jpeg", "avif", "gif":
		return "image/" + ext
	case "mp4", "avi", "webm":
		return "video/" + ext
	case "svg":
		return "image/svg+xml "
	default:
		return "application/octet-stream"
	}
}

func str(r *http.Request) func(string) string {
	zh := isChinaMode
	p := r.URL.Path
	if strings.HasPrefix(p, "/zh/") {
		zh = true
	} else if strings.HasPrefix(p, "/en/") {
		zh = false
	}

	if zh {
		return zhStr
	}
	return enStr
}

func getRoute(r *http.Request) func(string, ...bool) string {
	prefix := getBase(r)
	return func(s string, ignoreBase ...bool) string {
		if strings.HasPrefix(s, "http") {
			return s
		}
		ss := strings.Split(s, "?")
		path := ss[0]
		query := ""
		if len(ss) > 1 && ss[1] != "" {
			query = "?" + ss[1]
		}

		base := prefix
		if len(ignoreBase) > 0 && ignoreBase[0] {
			base = ""
		}
		return base + path + query
	}
}

func getBase(r *http.Request) string {
	prefix := ""
	p := r.URL.Path
	if strings.HasPrefix(p, "/zh/") {
		prefix = "/zh"
	} else if strings.HasPrefix(p, "/en/") {
		prefix = "/en"
	}
	return prefix
}

func getrPath(r *http.Request) string {
	return strings.TrimPrefix(r.RequestURI, getBase(r))
}

func tryBuild() error {
	if len(os.Args) <= 1 {
		return nil
	}
	if os.Args[1] != "build" {
		return nil
	}
	println("building..")
	addr = "localhost:" + strconv.Itoa(rand.Intn(1000)+8000)
	println("http://" + addr)
	go http.ListenAndServe(addr, nil)
	time.Sleep(time.Second)

	const outDir = "dist"
	os.RemoveAll(outDir)

	// add list
	list := []string{}
	if l, e := os.ReadDir("."); e == nil {
		for _, v := range l {
			if v.Name() == outDir {
				continue
			}
			switch filepath.Ext(v.Name()) {
			case ".go", ".md", ".mod", ".sum", "":
				continue
			}
			switch v.Name() {
			case "Makefile", ".git", ".gitignore", "lang", "a", "articles":
				continue
			}
			if strings.HasPrefix(v.Name(), ".") {
				continue
			}

			if v.IsDir() {
				e = filepath.WalkDir(v.Name(), func(path string, d fs.DirEntry, err error) error {
					if d.IsDir() {
						return nil
					}
					list = append(list, path)
					return nil
				})
				if e != nil {
					log.Println(e)
					return e
				}
				continue
			}
			list = append(list, v.Name())
		}
	}
	// a
	articles, e := os.ReadDir("./a/md/")
	if e != nil {
		log.Println(e)
		return e
	}
	for _, a := range articles {
		if a.IsDir() {
			continue
		}
		list = append(list, "a/"+strings.ReplaceAll(a.Name(), ".md", ".html"))
	}

	//build
	for _, v := range list {
		e := generateTo(outDir, v)
		if e != nil {
			log.Println(e)
			return e
		}

		if filepath.Ext(v) == ".html" {
			if strings.HasPrefix(v, "a/") {
				continue
			}

			e = generateTo(outDir, "zh/"+v)
			if e != nil {
				log.Println(e)
				return e
			}
			e = generateTo(outDir, "en/"+v)
			if e != nil {
				log.Println(e)
				return e
			}
		}
	}

	//articles
	dirs, e := os.ReadDir("articles")
	if e != nil {
		log.Println(e)
		return e
	}
	for _, dir := range dirs {
		if !dir.IsDir() {
			continue
		}
		for i := 0; ; i++ {
			e = generateTo(outDir, "articles/"+dir.Name()+"/"+strconv.Itoa(i)+".html")
			if e != nil {
				if strings.Contains(e.Error(), "404") {
					break
				}
				log.Println(e)
				return e
			}
		}
	}

	//res
	e = filepath.WalkDir("res", func(path string, d fs.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}
		dst := filepath.Join("dist", path)
		os.MkdirAll(filepath.Dir(dst), 0755)
		fo, e := os.OpenFile(dst, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0644)
		if e != nil {
			log.Println(e)
			return e
		}
		defer fo.Close()
		fi, e := os.Open(path)
		if e != nil {
			log.Println(e)
			return e
		}
		defer fi.Close()
		_, e = io.Copy(fo, fi)
		if e != nil {
			log.Println(e)
			return e
		}
		return nil
	})
	if e != nil {
		log.Println(e)
		return e
	}

	println("build finished")
	os.Exit(0)
	return nil
}

func generateTo(outDir string, v string) error {
	println(v)
	res, e := http.Get("http://" + addr + "/" + strings.TrimSuffix(v, "index.html"))
	if e != nil {
		log.Println(e)
		return e
	}
	defer res.Body.Close()
	b, e := io.ReadAll(res.Body)
	if e != nil {
		log.Println(e)
		return e
	}
	if res.StatusCode != 200 {
		return fmt.Errorf("generate %s failed %d: %s", v, res.StatusCode, string(b))
	}

	dst := filepath.Join(outDir, v)
	os.MkdirAll(filepath.Dir(dst), 0755)
	e = os.WriteFile(dst, b, 0644)
	if e != nil {
		log.Println(e)
		return e
	}
	return nil
}

func tryUpdateLang() {
	if !langNeedUpdate {
		return
	}
	b, e := json.MarshalIndent(enMap, "", "\t")
	if e != nil {
		log.Println(e)
		return
	}

	e = os.WriteFile("lang/en.json", b, 0644)
	if e != nil {
		log.Println(e)
		return
	}

	b, e = json.MarshalIndent(zhMap, "", "\t")
	if e != nil {
		log.Println(e)
		return
	}
	e = os.WriteFile("lang/zh.json", b, 0644)
	if e != nil {
		log.Println(e)
		return
	}
	println("language pack updated")
}

func help(w http.ResponseWriter, r *http.Request) {
	isZh := isChinaMode
	if strings.HasPrefix(r.URL.Path, "/zh/") {
		isZh = true
	} else if strings.HasPrefix(r.URL.Path, "/en/") {
		isZh = false
	}
	t, e := getTemplate(r)
	if e != nil {
		log.Panic(e)
		return
	}

	dir := "help/md/en/"
	if isZh {
		dir = "help/md/zh/"
	}
	list, e := markdownConverter.ReadDir(dir, nil)
	if e != nil {
		log.Panic(e)
		return
	}

	e = t.ExecuteTemplate(w, "help.html", map[string]any{
		"Req":         r,
		"Base":        getBase(r),
		"rPath":       getrPath(r),
		"IsChinaMode": isChinaMode,
		"List":        list,
	})
	if e != nil {
		log.Panic(e)
		return
	}

}

func a(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimPrefix(r.URL.Path, "/a/")
	id = strings.TrimSuffix(id, ".html")
	mdData, e := os.ReadFile("./a/md/" + id + ".md")
	if e != nil {
		log.Panic(e)
		return
	}

	t, e := getTemplate(r)
	if e != nil {
		log.Panic(e)
		return
	}

	a := markdownConverter.Convert(string(mdData))
	w.Header().Set("Content-Type", "text/html")
	e = t.ExecuteTemplate(w, "a.html", map[string]any{
		"Req":         r,
		"Base":        getBase(r),
		"rPath":       getrPath(r),
		"IsChinaMode": isChinaMode,
		"Article":     a,
		"Title":       a.Title,
	},
	)
	if e != nil {
		log.Panic(e)
		return
	}

	tryUpdateLang()
}

func home(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Path
	if strings.HasSuffix(name, "/") {
		name += "index.html"
	}
	if filepath.Ext(name) != ".html" {
		http.ServeFile(w, r, strings.TrimPrefix(name, "/"))
		return
	}

	t, e := getTemplate(r)
	if e != nil {
		log.Panic(e)
		return
	}

	name = strings.TrimPrefix(name, "/zh/")
	name = strings.TrimPrefix(name, "/en/")

	name = strings.TrimPrefix(name, "/")
	w.Header().Set("Content-Type", "text/html")

	isZh := isChinaMode
	base := getBase(r)
	switch base {
	case "/zh":
		isZh = true
	case "/en":
		isZh = false
	}
	var title string
	switch name {
	case "code.html":
		if isZh {
			title = "优惠券|激活码"
		} else {
			title = "Coupon|ActivationCode"
		}
	case "fastlogin.html":
		title = "LogIn|Redirect"
	}
	e = t.ExecuteTemplate(w, name, map[string]any{
		"Req":         r,
		"Base":        base,
		"rPath":       getrPath(r),
		"IsChinaMode": isChinaMode,
		"IsZh":        isZh,
		"Title":       title,
	},
	)
	if e != nil {
		log.Panic(e)
		return
	}

	tryUpdateLang()
}

func articles(w http.ResponseWriter, r *http.Request) {
	p := strings.Split(strings.TrimPrefix(r.URL.Path, "/"), "/")
	if len(p) != 3 {
		http.NotFound(w, r)
		return
	}
	title := p[1]
	page, e := strconv.Atoi(strings.TrimSuffix(p[2], ".html"))
	if e != nil {
		http.NotFound(w, r)
		return
	}

	t, e := getTemplate(r)
	if e != nil {
		log.Panic(e)
		return
	}

	all, e := markdownConverter.ReadDir("a/md/", nil)
	if e != nil {
		log.Panic(e)
		return
	}
	taggedArticles := []MarkdownArticle{}
	for _, v := range all {
		for _, k := range v.Keywords {
			if k == title {
				taggedArticles = append(taggedArticles, v)
				break
			}
		}
	}
	const pageSize = 25
	articles := []MarkdownArticle{}
	for i := page * pageSize; i < len(taggedArticles) && len(articles) < pageSize; i++ {
		articles = append(articles, taggedArticles[i])
	}

	if len(articles) == 0 {
		http.NotFound(w, r)
		return
	}

	e = t.ExecuteTemplate(w, "articles.html", map[string]any{
		"Req":         r,
		"Base":        getBase(r),
		"rPath":       getrPath(r),
		"IsChinaMode": isChinaMode,
		"Articles":    articles,
		"Page":        page,
		"MaxPage":     NumTotalPages(len(taggedArticles), pageSize) - 1,
		"Title":       title,
	})
	if e != nil {
		log.Panic(e)
		return
	}
}
