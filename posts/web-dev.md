---
title: 🇩🇪 web dev
publish_date: 2022-09-13
---

What is web development, how to do it and how to chose a tech stack.

# The Basics

I know, I know. Jede Woche kommt etwas neues raus und man könnte seinen
kompletten Tech-Stack überarbeiten, dabei gibt es schon tausende Wege eine
Webseite zu erstellen.

Aber erstmal: Wie ist eine typische Anwendung aufgebaut?

1. Frontend
2. Backend
3. Database

## Kommunikation: Frontend → Backend → Datenbank

Normalerweise spricht das Frontend nicht direkt mit der Datenbank, sondern
zuerst zu einem Backend, welches dann im "Hintergrund" mit der Datenbank redet.

Warum? Vorallem Sicherheit und Funktionen.

## Was macht ein Backend?

Ein Backend ist normalerweise eine
[HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
[REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-API, über
welche nicht nur die normalen [CRUD](https://de.wikipedia.org/wiki/CRUD)
(Create-Read-Update-Delete) Aktionen, welche auf der Datenbank ausgeführt
werden, sondern auch unter anderem Authentifizierung, Dateispeicher, (Echtzeit)
Kommunikation zur Datenbank und vieles mehr läuft.

<!-- Dadurch, dass das Backend als Schicht vor der Datenbank liegt, kann im Backend
auch fehlende Funktionalität der Datenbank erstetzt werden. So kann ich hier zum
Beispiel für Pagination, anstatt nur eine Liste von Einträgen, auch zurückgeben
wie viele Einträge es insgesamt gibt und auf welcher Seite man sich aktuell
befindet. Auch kann man zum Beispiel auch, falls die Datenbank es nicht von Haus
unterstützt, Echtzeit-Funktionalität ergänzen. -->

### CRUD

Hierfür sollte man sich sowohl im Frontend als auch im Backend an die gegebenen
[HTTP-Methoden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
halten:

| Method | CRUD Action           |
| ------ | --------------------- |
| GET    | Read                  |
| POST   | Create                |
| PUT    | Update (overwrite)    |
| PATCH  | Update (given fields) |
| DELETE | Delete single post    |

### Authentifizierung

Wenn ein Benutzer zum Beispiel `GET /user` anfragt, wird zuerst geprüft ob der
Benutzer authentifiziert ist, und falls ja wird der entsprechende Benutzer aus
der Datenbank gelesen und als JSON-Antwort zurückgegeben.

Falls kein Benutzer eingeloggt ist, wird ein entsprechender Error- / Status-Code
`(401 - Unauthorized)` zurückgegeben.

### Sicherheit

Dadurch, dass man die Anfragen immer zuerst ans Backend schickt, hat man eine
weitere Schicht an Sicherheitsfunktionen. Durch den Webserver dazwischen kann
man zum Beispiel
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)-Header setzen,
wie zuvor erwähnt Authentifizierung überprüfen, aber wenn man Backend und
Datenbank auf dem gleichen Server hat, kann man im Datenbank Benutzer auch
einstellen, dass der Datenbank-Benutzer sich nur über den localhost verbinden
darf. Damit ist man (theoretisch) selbst dann sicher, wenn man Benutzername und
Passwort für die Datenbank leakt.

## BaaS (Backend-As-A-Service)

**:warning: Eigene Meinung!** Ich werde auf 3 BaaS-Systeme genauer eingehen:

1. PocketBase
2. SupaBase
3. Firebase

### Video Links

- [I tried 5 Firebase alternatives](https://youtu.be/SXmYUalHyYk)
- [PocketBase... The Ultimate Side-Hustle Backend?](https://youtu.be/Wqy3PBEglXQ)

### SupaBase

Die SDK von SupaBase ist sehr gut, was TypeScript-Unterstützung angeht, da sie
unter anderem mit
[Generics](https://de.wikipedia.org/wiki/Generische_Programmierung_in_Java)
arbeitet.

Bei SupaBase merkt man stark, dass man direkt mit der Datenbank arbeitet, so
muss man sich selbst darum kümmern die Daten über `JOIN`s, etc. richtig aus der
Datenbank zu bekommen.

> In einem Satz: SupaBase ist ProgreSQL in der Cloud, nicht mehr und nicht
> weniger.

### Firebase

Firebase ist eine Katastrophe. Es liegt vielleicht an mir und wie ich über Daten
und Struktur nachdenke, aber ich kann weder mit der Realtime-Database, noch mit
Firebase richtig arbeiten. Es heißt immer man ist mit einer NoSQL Datenbank und
vorallem mit Firebase flexibler, jedoch frage ich mich ernsthaft _wo_.

Die Datenvalidierung ist ein Krampf, man muss sich genau merken / Dokumentation
führen, wo man was gespeichert hat damit Dinge wie
"[Multiple Path Updates](https://www.youtube.com/watch?v=i1n9Kw3AORw)" überhaupt
funktionieren und Querys ist eingeschränkter als bei jeder anderen Datenbank auf
der Welt. Dinge wie Pagination, Filter und Sortierung sind gleichzeitig
überhaupt nicht möglich. Von einer Suche ganz zu schweigen. Dazu strukturiert
man seine Datenbank nach der Ansicht des Benutzers. Falls man sich also dazu
entscheidet etwas am Frontend zu ändern, muss man auch die ensprechenden Daten
in der Datenbank ändern / hinzufügen. Wenn man sie einfach nur hinzufügt (was
die meisten machen) beginnt das Chaos uneinheitlichen Datensätze.

> In einem Satz: Firebase ist Müll für große Projekte, oder sobald man etwas
> ändern möchte.

### PocketBase

Das beste kommt zum Schluss. Bei PocketBase spürt man am meisten, dass man nicht
direkt mit der Datenbank arbeitet, das ist aber etwas gutes!

Zugreifen tut man am Ende immer über die eingebaute REST-API. Diese ist sehr
einfach zu benutzen, vor allem natürlich durch die JavaScript SDK. Dadurch, dass
man nicht dirket mit der Datenbank arbeitet, muss man sich um Dinge wie JOINS
nicht extra kümmern. Außerdem gehen Dinge wie Pagination sehr einfach und gut,
da dies bei der Programmierung des Backends bereits bedacht wurde.

> In einem Satz: PocketBase ist die einfachste und beste BaaS Lösung, da sie am
> meisten on-top liefert.

# An ocean full of choices

Nachdem das klar ist, sollte man sich eine Technologie suchen, in der man ein
Projekt / Anwendung umsetzen möchte. Dafür gibt es genug Auswahl-Möglichkeiten
um einen ganzen Ozean zu füllen.

## Je einfacher, je besser.

Normalerwise gillt die Faustregel was am einfachsten ist, ist die beste Lösung.
Falls man also schon mit einer Technologie vertraut ist, zum Beispiel
[PHP](https://laravel.com),
[.NET](https://dotnet.microsoft.com/en-us/apps/aspnet/apis),
[Python](https://www.djangoproject.com) oder [Swift](https://vapor.codes),
sollte man vermutlich einfach diese benutzen, anstatt zu versuchen sich in etwas
neues einzuarbeiten. Besonders in der JavaScript-Welt gibt es viel zu viele
Möglichkeiten, aus denen man wählen kann.

### Application Server

Alle verlinkten Frameworks sind dafür da, um Application-Server zu
programmieren. Diese sind schneller als "normale" Web-Server und sollten daher
immer bevorzugt werden.

> Link zu Artikel:
> [Application- vs Web-Server](https://www.ibm.com/cloud/learn/web-server-vs-application-server)

## Das benutze ich

Die meiste Zeit habe ich im MVC-Pattern PHP und MySQL in meinem
[eigenen Framework](https://github.com/felix-schindler/Router) verwendet und
habe deshalb auch heute noch am meisten Erfahrung damit. Mit der Zeit habe ich
PHP immer häufiger nur für's Backend genutzt und das Frontend zuerst in
[React](https://reactjs.org) und später in [Svelte](https://svelte.dev)
programmiert.

Heute nehme für das Frontend [SvelteKit](https://kit.svelte.dev) und als Backend
benutze ich [PocketBase](https://pocketbase.io) (und die damit verbundene
[SQLite](https://www.sqlite.org) Datenbank). Wenn ich PocketBase **nicht**
benutze, programmiere ich mein Backend ebenfalls in SvelteKit, da ich so alles
an einem Fleck habe und es am übersichtlichsten bleibt. Selten weiche ich für
Microservices auf [Deno](https://deno.land) aus.

Falls ich auch eine herunterlad- und installierbare Version brauche mache ich
aus der Seite eine [PWA](https://de.wikipedia.org/wiki/Progressive_Web_App) oder
benutze [Tauri](https://tauri.app).

## Video Links

- [God-Tier Developer Roadmap](https://youtu.be/pEfrdAtAmqk)
- [How to choose a framework](https://youtu.be/SJeBRW1QQMA)
- [Frontend Framework Comparison](https://youtu.be/cuHDQhDhvPE)
- [Backend Framework Comparison](https://youtu.be/FQPlEnKav48)

# The Edge

I don't really care about CDNs and the Edge.

## Why not?

Even projects at work are used at max by 50 people. Also I know the region where
these 50 people work from, even if they work from home. Therefore there just is
no need for stuff like that.

Außerdem ist es für die meisten Use-Cases überhaupt nicht schneller das Edge zu
benutzen.

> Siehe Video:
> [Is "edge" computing really faster?](https://youtu.be/yOP5-3_WFus)

## The price of running servers

Virtuelle Server (VPS) sind ziemlich billig. Bei [1blu](https://1blu.de) bekommt
man zum Beispiel für circa 5€ / Monat einen VPS mit 4 Kerne, 8 GB RAM und 120 GB
SSD. Dazu muss man dort nichts für den verursachten Traffic zahlen. Dies ist
deutlich billiger als Dienste wie Digital Ocean. Heroku hat dazu leider seinen
kostenlosen Service eingestellt. Auf solch einem VPS kann man dann alles
installieren was man braucht, die Webseite(n) hochladen oder GitLab- /
GitHub-Runner installieren für automatisches Deployment und fertig.
