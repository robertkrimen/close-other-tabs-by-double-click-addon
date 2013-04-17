.PHONY: xpi install addon-sdk

xpi:
	cfx --version
	cfx xpi

install: xpi
	open -a Firefox close-other-tabs-by-double-click.xpi

addon-sdk:
	curl -OL https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/addon-sdk-latest.tar.gz
	rm -rf addon-sdk
	mkdir -p addon-sdk
	gtar -xvzf addon-sdk-latest.tar.gz -C addon-sdk --strip-components 1
