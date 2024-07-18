package zweb

type LangEngine struct {
	LangDir     string // language directory, default lang/
	DefaultLang string //default language, default en
}

func NewLangEngine(langDir string) *LangEngine {
	z := &LangEngine{LangDir: langDir}
	return z
}
func (l *LangEngine) getDefaultLang() string {
	if l.DefaultLang == "" {
		return "en"
	}
	return l.DefaultLang
}

// method run
func (l *LangEngine) Run() {
}
