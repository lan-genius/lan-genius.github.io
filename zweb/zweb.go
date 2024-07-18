package zweb

import (
	"html/template"
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

type (
	ZWeb struct {
		cfg        Config
		langEngine *LangEngine
		tpl        *template.Template
		addr       string
	}
	Config struct {
		Dir         string   //target directory, default src/
		OutDir      string   //output directory, default public/
		LangDir     string   // language directory, default lang/
		TemplateExt []string // template extension, default .html
	}
)

func init() {
	log.SetFlags(log.Lshortfile)
}

func New(cfg ...Config) *ZWeb {
	z := &ZWeb{}
	if len(cfg) > 0 {
		z.cfg = cfg[0]
	}

	//init
	if z.cfg.Dir == "" {
		z.cfg.Dir = "src"
	}
	if z.cfg.OutDir == "" {
		z.cfg.OutDir = "public"
	}
	z.langEngine = NewLangEngine(z.cfg.LangDir)
	return z
}

// method isTemplateExt
func (z *ZWeb) isTemplateExt(ext string) bool {
	if len(z.cfg.TemplateExt) == 0 {
		z.cfg.TemplateExt = []string{".html"}
	}
	for _, e := range z.cfg.TemplateExt {
		if e == ext {
			return true
		}
	}
	return false
}

// method loadtemplates
func (z *ZWeb) loadTemplates() error {
	var toParse []string
	e := filepath.WalkDir(z.cfg.Dir, func(path string, d fs.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}
		if z.isTemplateExt(filepath.Ext(path)) {
			toParse = append(toParse, path)
		}
		return nil
	})
	if e != nil {
		log.Println(e)
		return e
	}

	t := template.New("zweb template")
	for _, path := range toParse {
		rel, e := filepath.Rel(z.cfg.Dir, path)
		if e != nil {
			log.Println(e)
			return e
		}
		println(rel)
		bs, e := os.ReadFile(path)
		if e != nil {
			log.Println(e)
			return e
		}
		t, e = t.New(rel).Parse(string(bs))
		if e != nil {
			log.Println(e)
			return e
		}
	}

	z.tpl = t
	return nil
}

// method Run
func (z *ZWeb) Run() error {
	e := z.loadTemplates()
	if e != nil {
		log.Println(e)
		return e
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		name := r.URL.Path
		if strings.HasSuffix(name, "/") {
			name += "index.html"
		}
		name = name[1:]
		if z.isTemplateExt(filepath.Ext(name)) {
			e := z.tpl.ExecuteTemplate(w, name, nil)
			if e != nil {
				log.Println(e)
				http.Error(w, e.Error(), http.StatusInternalServerError)
				return
			}
			return
		}
		http.ServeFile(w, r, filepath.Join(z.cfg.Dir, name))
	})

	z.addr = ":" + strconv.Itoa(rand.Intn(1000)+8080)
	e = http.ListenAndServe(z.addr, nil)
	if e != nil {
		log.Panic(e)
		return e
	}
	return nil
}

// method export
func (z *ZWeb) Export() error {
	go z.Run()
	os.RemoveAll(z.cfg.OutDir)
	time.Sleep(1 * time.Second)
	e := filepath.WalkDir(z.cfg.Dir, func(path string, d fs.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}
		rel, e := filepath.Rel(z.cfg.Dir, path)
		if e != nil {
			log.Println(e)
			return e
		}

		println(rel)
		dst := filepath.Join(z.cfg.OutDir, rel)
		e = downloadTo(dst, "http://localhost"+z.addr+"/"+strings.TrimSuffix(rel, "index.html"))
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
	return nil
}
