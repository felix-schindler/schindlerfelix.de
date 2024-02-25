# GPG und Git

Du kannst GPG zum Verschlüsseln, Entschlüsseln und Signieren von Nachrichten
benutzen. In Kombination mit Git kannst du es zum Signieren von Git Commits,
Tags und Pushes benutzen.

## Installation

Diese Anleitung ist für macOS. Alle folgenden Befehle sollten auch auf Linux
funktionieren, allerdings musst du dort `pinentry-mac` **nicht** installieren.

```bash
$ brew install gnupg pinentry-mac
```

```bash
$ touch ~/.gnupg/gpg-agent.conf
$ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
$ echo 'export GPG_TTY=$(tty)' >> ~/.zshrc
```

Wenn du nicht ZSH als deine Shell benutzt, musst du die letzte Zeile in deine
Shell-Konfigurationsdatei ändern. Häufige sind `.bashrc` oder `.bash_profile`.

## GPG

### Schlüssel generieren

```bash
$ gpg --full-gen-key
```

### Schlüssel auflisten lassen

```bash
$ gpg --list-secret-keys --keyid-format long

sec   rsa4096/<THIS-IS-YOUR-KEY-ID> 2021-03-17 [SC]
```

Die erste Zeile ist der Ort, an dem du deine Schlüssel-ID erhältst, wenn du
deine Schlüssel auflistest.

### Importieren / Exportieren von Schlüsseln

```bash
# Public
$ gpg --import <KEYFILE>
$ gpg --armor --export <KEY-ID> | pbcopy

# Private
$ gpg --import --allow-secret-key-import <KEYFILE>
$ gpg --armor  --export-secret-key <KEY-ID> | pbcopy
```

## Git config

### Global

```bash
$ git config --global commit.gpgsign true
$ git config --global gpg.program $(which gpg)
$ git config --global user.signingkey <KEY-ID>
```

Der Schlüssel den du benutzt (`user.signingkey`) muss für die gleiche E-Mail
generiert sein, die du für deine Commits benutzt.

### Lokal

Wenn du mehrere Git Instanzen mit unterschiedlichen E-Mails benutzt, kannst du
die Konfiguration für ein einzelnes Repository ändern.

```bash
$ git clone <git@github.com:USER/PROJECT.git>
$ cd <PROJECT>

$ git config user.email "someone@example.com"
$ git config user.signingkey <KEY-ID>
```

Anstatt das Signieren global zu aktivieren, kannst du auch einzelne Commits
signieren

```bash
$ git commit -S -m "Message"
```
