package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"mime"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

func loadLangJson(file string) map[string]string {
	m := make(map[string]string)
	b, e := os.ReadFile(file)
	if e != nil {
		log.Panic(e)
		return nil
	}
	e = json.Unmarshal(b, &m)
	if e != nil {
		log.Panic(e)
		return nil
	}
	return m
}

func toUpperCamelCase(s string) string {
	if s == "" {
		return ""
	}
	v := s[0]
	if v >= 'a' && v <= 'z' {
		return strings.ToUpper(string(v)) + s[1:]
	}
	return s
}

func SubBefore(s string, sep, def string) string {
	for i := 0; i <= len(s)-len(sep); i++ {
		if s[i:i+len(sep)] == sep {
			return s[:i]
		}
	}
	return def
}
func SubBeforeLast(s, sep, def string) string {
	for i := len(s) - len(sep); i > -1; i-- {
		if s[i:i+len(sep)] == sep {
			return s[:i]
		}
	}
	return def
}

func SubAfter(s, sep, def string) string {
	for i := 0; i <= len(s)-len(sep); i++ {
		if s[i:i+len(sep)] == sep {
			return s[i+len(sep):]
		}
	}
	return def
}

func SubAfterLast(s, sep, def string) string {
	for i := len(s) - len(sep); i > -1; i-- {
		if s[i:i+len(sep)] == sep {
			return s[i+len(sep):]
		}
	}
	return def
}

type MarkdownArticle struct {
	Id, Title, Cover, From, Author, PublishTime string
	Content                                     template.HTML
	Keywords                                    []string
	RelatedArticles                             []MarkdownArticle
	PreviousArticle, NextArticle                *MarkdownArticle
	Children                                    []MarkdownArticle
	Headers                                     map[string]string
}

type MarkdownConverter struct {
	processors []MarkdownProcessor
}
type MarkdownProcessor func(s string) (string, bool)

func NewMarkdownConverter() *MarkdownConverter {
	var d *MarkdownConverter
	return &MarkdownConverter{
		processors: []MarkdownProcessor{
			d.createHeadProcessor("# ", "h1"),
			d.createHeadProcessor("## ", "h2"),
			d.createHeadProcessor("### ", "h3"),
			d.createHeadProcessor("#### ", "h4"),
			d.createMediaProcessor(),
		},
	}
}
func (d *MarkdownConverter) createMediaProcessor() MarkdownProcessor {
	return func(s string) (string, bool) {
		if !strings.HasPrefix(s, "![") {
			return "", false
		}
		alt := SubBefore(s, "](", "")
		alt = SubAfter(alt, "![", alt)
		s = SubAfter(s, "](", "")
		s = SubBefore(s, ")", s)
		m := mime.TypeByExtension(filepath.Ext(s))
		if strings.HasPrefix(m, "image/") {
			return fmt.Sprintf(`<img src="%s" load="lazy" width="80%" style="max-width:700px" alt="%s"/>`, s, alt), true
		}
		if strings.HasPrefix(m, "audio/") {
			return fmt.Sprintf(`<audio src="%s" controls/>`, s), true
		}
		if strings.HasPrefix(m, "video/") {
			return fmt.Sprintf(`<video src="%s" controls preload="none" style="max-height:700px;max-width:700px"/>`, s), true
		}
		return s, false
	}
}

func (d *MarkdownConverter) createHeadProcessor(prefix, elemTag string) MarkdownProcessor {
	return func(s string) (string, bool) {
		if !strings.HasPrefix(s, prefix) {
			return "", false
		}
		s = strings.TrimPrefix(s, prefix)
		return fmt.Sprintf(`<%s>%s</%s>`, elemTag, s, elemTag), true
	}
}

func (d *MarkdownConverter) Convert(content string) MarkdownArticle {
	v := MarkdownArticle{Headers: make(map[string]string)}
	if strings.HasPrefix(content, "---\n") {
		content = strings.TrimPrefix(content, "---\n")
		headers := SubBefore(content, "---\n", "")
		content = SubAfter(content, "---\n", content)

		lines := strings.Split(headers, "\n")
		for _, l := range lines {
			if l == "" {
				continue
			}
			k, value := d.parseHeader(l)
			v.Headers[k] = value
		}

		//parse
		v.Id = v.Headers["id"]
		v.Title = v.Headers["title"]
		v.Cover = v.Headers["cover"]
		v.Keywords = d.parseKeywords(v.Headers["keywords"])
		v.From = v.Headers["from"]
		v.Author = v.Headers["author"]
		v.PublishTime = v.Headers["publishTime"]
		v.RelatedArticles = d.parseArticleLinks(v.Headers["related"])
		v.PreviousArticle = d.parseArticleLink(v.Headers["prev"])
		v.NextArticle = d.parseArticleLink(v.Headers["next"])
		v.Children = d.parseArticleLinks(v.Headers["children"])
	}

	lines := strings.Split(content, "\n")
	renderred := new(strings.Builder)
	for _, line := range lines {
		has := false
		for _, pro := range d.processors {
			v, ok := pro(line)
			if ok {
				line = v
				has = true
			}
		}
		if !has {
			line = fmt.Sprintf("<p>%s</p>\n", line)
		}
		renderred.WriteString(line)
	}
	v.Content = template.HTML(renderred.String())
	return v
}

func (d *MarkdownConverter) parseHeader(l string) (string, string) {
	l = strings.ReplaceAll(l, "：", ":")
	ss := strings.Split(l, ":")
	var k, v string
	k = strings.TrimSpace(ss[0])
	if len(ss) > 1 {
		v = strings.TrimSpace(ss[1])
	}
	return k, v
}

func (d *MarkdownConverter) parseKeywords(v string) []string {
	if v == "" {
		return nil
	}
	v = strings.ReplaceAll(v, "，", ",")
	v = strings.ReplaceAll(v, "；", ",")
	v = strings.ReplaceAll(v, ";", ",")
	return strings.Split(v, ",")
}

func (d *MarkdownConverter) parseArticleLinks(v string) []MarkdownArticle {
	if v == "" {
		return nil
	}
	v = strings.ReplaceAll(v, "，", ",")
	v = strings.ReplaceAll(v, "；", ",")
	v = strings.ReplaceAll(v, ";", ",")
	vs := strings.Split(v, ",")
	out := []MarkdownArticle{}
	for _, v := range vs {
		item := d.parseArticleLink(v)
		if item != nil {
			out = append(out, *item)
		}
	}
	return out
}

func (d *MarkdownConverter) parseArticleLink(link string) *MarkdownArticle {
	if link == "" {
		return nil
	}
	title := SubBefore(link, "|", link)
	id := SubAfter(link, "|", title)
	return &MarkdownArticle{
		Id:    id,
		Title: title,
	}
}

func (m *MarkdownConverter) ReadDir(dir string, inc *int) ([]MarkdownArticle, error) {
	out := []MarkdownArticle{}
	fs, e := os.ReadDir(dir)
	if e != nil {
		log.Println(e)
		return nil, e
	}
	if inc == nil {
		var i = 0
		inc = &i
	}
	for _, d := range fs {
		if d.IsDir() {
			vs, e := m.ReadDir(filepath.Join(dir, d.Name()), inc)
			if e != nil {
				log.Println(e)
				return nil, e
			}
			out = append(out, MarkdownArticle{
				Id:       d.Name(),
				Title:    d.Name(),
				Children: vs,
			})
			continue
		}
		if !strings.HasSuffix(d.Name(), ".md") {
			continue
		}
		b, e := os.ReadFile(filepath.Join(dir, d.Name()))
		if e != nil {
			log.Println(e)
			return nil, e
		}

		v := m.Convert(string(b))
		if v.Title == "" {
			v.Title = strings.TrimSuffix(d.Name(), ".md")
		}
		if v.Id == "" {
			v.Id = "a" + strconv.Itoa(*inc)
			*inc++
		}
		out = append(out, v)
	}

	return out, nil
}

func NumTotalPages(total, pageSize int) int {
	if total <= 0 {
		return 1
	}
	page := total / pageSize
	mod := total % pageSize
	if mod == 0 {
		return page
	}
	return page + 1
}
