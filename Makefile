install:
	npm install

version:
	./scripts/versions.js

docs: version
	cd docs/raw && ../../bin/selleck -o ../html

deploydocs: docs
	cp -R ./docs/html/* ../selleck-pages/

lint:
	npm run-script pretest

test:
	npm test

.PHONY: docs
