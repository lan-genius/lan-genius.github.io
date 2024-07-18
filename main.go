package main

import (
	"os"

	"github.com/lan-genius/lan-genius.github.io/zweb"
)

func main() {
	z := zweb.New(zweb.Config{
		DefaultLang: "zh",
	})
	if os.Args[1] == "run" {
		z.Run()
		return
	}
	// z.Run()
	z.Export()
}
