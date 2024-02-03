# Caddy Web Server

Für alle die Caddy nicht kennen: Caddy ist ein Webserver, der einfach zu
konfigurieren ist. Ich mag ihn auch, weil er automatisches HTTPS und HTTP/3
unterstützt. Beides ist standardmäßig aktiviert.

Wenn du nur einen Dienst auf deinem Server laufen lässt, brauchst du keinen
Webserver wie Caddy, Nginx oder Apache2. Stattdessen kannst du deine Anwendung
direkt laufen lassen. PocketBase unterstützt zum Beispiel sogar automatisches
HTTPS.

## Globale Einstellungen

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

## Zusätzliche Konfigurationen

Natürlich kannst du mit Caddy noch viel mehr machen. Ich spiele zum Beispiel
gerne mit Headern.

```nginx
# HSTS
header Strict-Transport-Security max-age=63072000

# FLoC-Tracking deaktivieren
Permissions-Policy interest-cohort=()

# Cache, z. B. für statische Dateien
header /static/* Cache-Control max-age=31536000
```
