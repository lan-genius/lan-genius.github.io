run:
	# en
	replace -f svelte.config.js "base: ''" "base: '/en'";	
	replace -f svelte.config.js "base: '/zh'" "base: '/en'";
	bun b
	mv docs en
	# zh
	replace -f svelte.config.js "base: '/en'" "base: '/zh'";
	bun b
	mv docs zh;
	# root
	replace -f svelte.config.js "base: '/zh'" "base: ''";
	bun b;
	mkdir docs/zh
	mkdir docs/en

	mv zh/*.html docs/zh/
	mv en/*.html docs/en/

	rm -rf en/
	rm -rf zh/