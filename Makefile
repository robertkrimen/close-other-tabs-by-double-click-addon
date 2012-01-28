.PHONY: all

all:
	cd close-other-tabs-by-double-click && zip --exclude *.swp -r ../close-other-tabs-by-double-click.xpi *
