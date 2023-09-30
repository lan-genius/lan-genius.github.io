run:
	# en
	sed -i '' -e "s/base:\ ''/base:\ '\/en'/g" svelte.config.js
	sed -i '' -e "s/base:\ '\/zh'/base:\ '\/en'/g" svelte.config.js
	bun b
	mv docs en

	# zh
	sed -i '' -e "s/base:\ '\/en'/base:\ '\/zh'/g" svelte.config.js
	bun b
	mv docs zh;

	# root
	sed -i '' -e "s/base:\ '\/zh'/base:\ ''/g" svelte.config.js
	bun b;
	mkdir docs/zh
	mkdir docs/en

	mv zh/*.html zh/bundle docs/zh/
	mv en/*.html en/bundle docs/en/

	rm -rf en/
	rm -rf zh/