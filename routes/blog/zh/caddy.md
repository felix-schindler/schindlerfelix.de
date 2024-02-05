# Caddy Web Server

对于所有不熟悉[Caddy](https://caddyserver.com/)的人来说，它是一个易于使用和配置的Web服务器。我也喜欢它，因为它默认支持自动HTTPS和HTTP/3。

当然，当你只在整个服务器上运行一个服务时，你不需要像Caddy、Nginx或Apache2这样的Web服务器。相反，你可以直接运行你的应用程序。例如，PocketBase甚至支持自动HTTPS。

## 全局设置

```nginx
{
	email webmaster@schindlerfelix.de
}
```

## SvelteKit + PocketBase

```nginx
project.schindlerfelix.de {
	encode gzip zstd

	# PocketBase
	reverse_proxy /api/* localhost:8090
	reverse_proxy /_/* localhost:8090

	# SvelteKit
	reverse_proxy * localhost:3000
}
```

## PHP

```nginx
project.schindlerfelix.de {
	root * /srv/project
	encode gzip zstd
	php_fastcgi unix//run/php/php8.3-fpm.sock
	file_server
}
```

## SPA

```nginx
project.schindlerfelix.de {
	root * /srv/project
	encode gzip zstd
	try_files {path} /index.html
	file_server
}
```

### SPA + RestAPI

```nginx
project.schindlerfelix.de {
	encode gzip zstd

	handle /api/* {
		reverse_proxy backend:8000
	}

	handle {
		root * /srv/project
		try_files {path} /index.html
		file_server
	}
}
```

## 其他配置

当然，你可以用Caddy做更多的事情。例如，我喜欢玩头部。

```nginx
# HSTS
header Strict-Transport-Security max-age=63072000

# 禁用 FLoC 跟踪
header Permissions-Policy interest-cohort=()

# 缓存，例如静态文件
header /static/* Cache-Control max-age=31536000
```
