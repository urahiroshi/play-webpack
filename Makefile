.PHONY: install
install:
	npm i
	cd v3 && npm i
	cd v4 && npm i

.PHONY: v3
v3:
	cd v3 && npm run build

.PHONY: v4
v4:
	cd v4 && npm run build