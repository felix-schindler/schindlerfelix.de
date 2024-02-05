# Caddy Web Server

For everyone not familiar with [Caddy](https://caddyserver.com/) it is a web
server that is easy to use and configure. I also like it because of it's support
for automatic HTTPS and HTTP/3. Both of these things are enabled by default.

Of course, when you only run a single service on your whole server you don't
need a web server like Caddy, Nginx or Apache2. Instead, you can just run your
application directly. PocketBase for example even supports automatic HTTPS.

## Global settings

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

## Feeling ✨fancy✨

Of course you can do a lot more with Caddy. I like playing with headers for
example.

```nginx
# HSTS
header Strict-Transport-Security max-age=63072000

# disable FLoC tracking
header Permissions-Policy interest-cohort=()

# Cache e. g. for static files
header /static/* Cache-Control max-age=31536000
```
