package main

import "github.com/lan-genius/lan-genius.github.io/zweb"

func main() {
	z := zweb.New(zweb.Config{
		DefaultLang: "zh",
	})
	// z.Run()
	z.Export()
}
