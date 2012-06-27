.PHONY: xpi install

xpi:
	cfx xpi

install: xpi
	open -a Firefox close-other-tabs-by-double-click.xpi

