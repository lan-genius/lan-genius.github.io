package zweb

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
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

func writeHtmlHeader(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
}

func downloadTo(dst string, url string) error {
	res, e := http.Get(url)
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
		return fmt.Errorf("generate %s failed %d: %s", url, res.StatusCode, string(b))
	}

	os.MkdirAll(filepath.Dir(dst), 0755)
	e = os.WriteFile(dst, b, 0644)
	if e != nil {
		log.Println(e)
		return e
	}
	return nil
}
