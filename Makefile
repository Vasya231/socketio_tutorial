all: install

install: 
	npm install

build:
	rm -rf dist
	npm run build

run:
	node ./dist/index.js

lint:
	npx eslint .

lintfix:
	npx eslint . --fix