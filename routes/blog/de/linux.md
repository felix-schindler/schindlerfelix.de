# Linux

## Neuen Benutzer hinzufügen

```bash
# Mit einem Server verbinden
$ ssh root@123.123.123.123

# Neuen Benutzer mit sudo-Rechten hinzufügen
$ sudo useradd -mG sudo felix

# Passwort für den neuen Benutzer festlegen
$ sudo passwd felix

# Als neuer Benutzer anmelden
$ su - felix
```

Um zu überprüfen, ob der Benutzer sudo-Rechte hat, kannst du `sudo ls /root`
ausführen und die Gruppen des Benutzers mit `groups felix` überprüfen.

Ab sofort kannst du bei der Verbindung deinen Benutzer anstelle von `root`
verwenden. Ich füge auch gerne eine Variable des Benutzers und der IP zu meiner
`.zshrc`-Datei hinzu, damit ich Benutzername und IP nicht merken muss.

```bash
$ ssh felix@123.123.123.123

# Variable zu .zshrc hinzufügen
$ echo "export SERVER_NAME=felix@123.123.123.123" >> ~/.zshrc
$ ssh $SERVER_NAME
```

## Sicherheit verbessern

### Schlüsselauthentifizierung anstelle von Passwörtern

SSH keys are more secure and convenient than passwords. Generate them on your
local device and them add them to the server. If you already have a key, just
use that one.

```bash
# SSH-Schlüssel generieren
$ ssh-keygen -t ed25519

# Den öffentlichen Schlüssel auf den Server hochladen
$ scp ~/.ssh/id_ed25519.pub felix@123.123.123.123:~/.ssh/authorized_keys

# Die richtigen Berechtigungen auf dem Server festlegen
$ ssh felix@123.123.123.123
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
```

Beim Verwenden von `scp` solltest du darauf achten, die `authorized_keys`-Datei
nicht zu überschreiben. Wenn du bereits Schlüssel auf dem Server haben, solltest
du den neuen Schlüssel anhängen, anstatt die Datei zu überschreiben.

Nachdem du deinen Schlüssel auf dem Server hinzugefügt haben, kannst du die
Passwortauthentifizierung vollständig deaktivieren. Öffne dazu die `sshd_config`
und ändere die Zeile `PasswordAuthentication yes` zu
`PasswordAuthentication no`. Nachdem du die Konfiguration geändert haben, musst
du den SSH-Dienst neu starten, um die Änderungen zu übernehmen.

```bash
# Konfiguration ändern
$ sudo nano /etc/ssh/sshd_config

# SSH-Dienst neu starten
$ sudo systemctl restart sshd
```

### Firewall

Du kannst `ufw` als einfache Firewall verwenden, **vergiss jedoch nicht, die
SSH-Ports zu erlauben, bevor du sie aktivierst**, da du sonst **den Zugriff auf
diesen Server verlierst**.

```bash
# Neuen Port zulassen
$ ufw allow PORT

# Erlaubten Port entfernen
$ ufw delete allow PORT

# Regeln der Firewall anzeigen
$ ufw status

# Firewall aktivieren
$ ufw enable
```

## Nützliche Befehle

```bash
# Aktuell verwendete Ports anzeigen
$ lsof -i -P -n

# Alle Festplattengrößen anzeigen
$ df -h
```

### Viele Dateien _schnell_ verschieben

`rsync` ist ein schnelles und vielseitiges Dateikopierwerkzeug. Es ist großartig
für Backups, aber du kannst es auch verwenden, um Websites und vieles mehr zu
deployen. Die Optionen sind nur meine persönliche Präferenz, du kannst sie an
deine Bedürfnisse anpassen.

```bash
$ rsync -avhrz --delete build/ felix@123.123.123.123:/var/www/DOMAIN/
```

## Updates

```bash
# Ubuntu auf die neueste Version aktualisieren
$ sudo do-release-upgrade

# Pakete aktualisieren
$ sudo apt update
$ sudo apt upgrade
$ sudo apt dist-upgrade

# Alte Pakete entfernen
$ sudo apt autoremove
```

## Installieren von gängigen Paketen, basierend auf meinen Bedürfnissen

Bitte kopiere und füge diese Liste nicht einfach blind ein. Installiere nur das,
was _du_ benötigst. Anstatt all diese Dinge manuell zu installieren, kannst du
auch einfach Docker installieren.

### Webserver - Caddy

```bash
$ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
$ sudo apt update
$ sudo apt install caddy
```

### JAMstack

```bash
# Node.js installieren
$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt install -y nodejs

# Deno installieren
$ curl -fsSL https://deno.land/x/install/install.sh | sh

# Bun installieren
$ curl -fsSL https://bun.sh/install | bash
```

### PHP

```bash
$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt update
$ sudo apt install php8.3 php8.3-fpm php8.3-mysql php8.3-mbstring php8.3-zip
```

### Datenbank

```bash
# PostgreSQL
$ sudo apt install postgresql

# MariaDB
$ sudo apt install mariadb-server
$ sudo mysql_secure_installation
```
