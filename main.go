package main

import (
	"log"

	"github.com/lan-genius/lan-genius.github.io/zweb"
)

func init() {
	log.SetFlags(log.Lshortfile)
}

func main() {
	z := zweb.New()
	z.Export()
}
