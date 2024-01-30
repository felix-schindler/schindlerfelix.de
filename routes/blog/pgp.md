# GPG and Git

You can use GPG for encrypting, decrypting as well as signing messages. In
combination with Git you can use it for signing git commits, tags and pushes.

## Installation

This guide is for macOS. All of the following commands should also work on
Linux, although you don't need to install `pinentry-mac` there.

```bash
$ brew install gnupg pinentry-mac
```

```bash
$ echo "pinentry-program /usr/local/bin/pinentry-mac" >> ~/.gnupg/gpg-agent.conf
$ echo 'export GPG_TTY=$(tty)' >> ~/.zshrc
```

If you're not using ZSH as your shell, you need to change the last line to your
shell's config file. Common ones are `.bashrc` or `.bash_profile`.

## GPG

### Generate keys

```bash
$ gpg --full-gen-key
```

### List your keys

```bash
$ gpg --list-secret-keys --keyid-format long

sec   rsa4096/<THIS-IS-YOUR-KEY-ID> 2021-03-17 [SC]
```

The first line is where you get your key id when listing your keys.

### Import / Export of keys

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

The key you're using (`user.signingkey`) has to be generated for the same email
as you're using for your commits.

### Local

When using multiple git instances with different emails, you can change the
config for a single repos

```bash
$ git clone <git@github.com:USER/PROJECT.git>
$ cd <PROJECT>

$ git config user.email "someone@example.com"
$ git config user.signingkey <KEY-ID>
```

Instead of activating signing globally, you can also sign single commits

```bash
$ git commit -S -m "Message"
```
