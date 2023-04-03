# PGP / GnuPG and Git

## Installation

```bash
brew install gnupg pinentry-mac
```

```bash
echo "pinentry-program /usr/local/bin/pinentry-mac" >> ~/.gnupg/gpg-agent.conf
echo 'export GPG_TTY=$(tty)' >> ~/.zshrc
```

## GPG

### Generate keys

```bash
gpg --full-gen-key
```

### List your keys

```bash
gpg --list-secret-keys --keyid-format long

# The first line is where you get your key id
sec   rsa4096/<THIS-IS-YOUR-KEY-ID> 2021-03-17 [SC]
```

### Import / Export

```bash
# Public
gpg --import <KEYFILE>
gpg --armor --export <KEY-ID> | pbcopy

# Private
gpg --import --allow-secret-key-import <KEYFILE>
gpg --armor  --export-secret-key <KEY-ID> | pbcopy
```

## Git

### Global

```bash
git config --global commit.gpgsign true
git config --global gpg.program $(which gpg)
git config --global user.signingkey <KEY-ID>
```

The key you're using (`user.signingkey`) has to be generated for the same email
as you're using for your commits.

### Local

When using multiple git instances with different emails, you can change the
config for a single repos

```bash
git clone <git@github.com:USER/PROJECT.git>
cd <PROJECT>

git config user.email "someone@example.com"
git config user.signingkey <KEY-ID>
```

Instead of activating signing globally, you can also sign single commits

```bash
git commit -S -m "Message"
```
