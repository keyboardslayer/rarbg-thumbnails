
build:
	@rm -rf dist; \
	mkdir -p dist; \
	pushd ./src > /dev/null; \
	zip -rq ../dist/rarbg-thumbnails-ext ./*; \
	popd > /dev/null; \
	echo "Done"
