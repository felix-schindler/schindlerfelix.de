# 形象✨魔术✨ 使用ImageMagick

你有没有一堆图片想要转换成不同的格式？也许你想要把一堆 `.png` 文件转换成 `.jpg`
文件。或者你想要把一堆 `.heic` 文件转换成 `.avif` 文件。好吧，你可以用
[ImageMagick](https://imagemagick.org/) 来做到这一点。

## 安装

```bash
$ brew install imagemagick
```

## 使用

你可以像这样简单地转换一个文件

```bash
$ magick convert image.png image.jpg
```

或者，如果你想转换一个目录的所有文件，你可以使用 `mogrify`

```bash
$ magick mogrify -format avif *.HEIC
```
