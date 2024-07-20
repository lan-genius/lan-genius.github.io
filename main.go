package main

import (
	"os"

	"github.com/stevenzack/zweb"
)

func main() {
	z := zweb.New(zweb.Config{
		DefaultLang: "zh",
	})
	if len(os.Args) > 1 && os.Args[1] == "run" {
		z.Run()
		return
	}
	// z.Run()
	z.Export()
}
