# Image ✨magic✨ with ImageMagick

You ever have a bunch of images that you want to convert to a different format?
Maybe you want to convert a bunch of `.png` files to `.jpg` files. Or maybe you
want to convert a bunch of `.heic` files to `.avif` files. Well, you can do that
with [ImageMagick](https://imagemagick.org/).

## Installation

```bash
$ brew install imagemagick
```

## Usage

You can convert one file as easy as this:

```bash
# Convert one PNG to JPG
$ magick convert image.png image.jpg
```

or if you want to convert all files of a directory you can use `mogrify`:

```bash
# Convert all HEIC to AVIF images
$ magick mogrify -format avif *.HEIC
```
