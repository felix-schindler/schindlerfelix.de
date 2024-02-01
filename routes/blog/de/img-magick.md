# Bild ✨Magie✨ mit ImageMagick

Wolltest du schon mal ein paar Bilder zu einem anderen Dateiformat konvertieren?
Vielleicht wolltest du ein paar `.png` zu `.jpg` Dateien konvertieren. Oder
vielleicht einige `.heic` zu `.avif` Dateien. Nun, das kannst du mit
[ImageMagick](https://imagemagick.org/) machen.

## Installation

```bash
$ brew install imagemagick
```

## Nutzung

Du kannst eine einzelne Datei einfach so konvertieren:

```bash
# Konvertiert ein PNG zu JPG
$ magick convert image.png image.jpg
```

oder wenn du alle Dateien eines Verzeichnisses konvertieren willst, kannst du
`mogrify` benutzen:

```bash
# Konvertiert alle HEIC zu AVIF Dateien
$ magick mogrify -format avif *.HEIC
```
