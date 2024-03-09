# GPG 和 Git

你可以使用 GPG 来加密、解密和签名消息。结合 Git，你可以用它来签名 git
提交、标签和推送。

## 安装

本指南适用于macOS。以下所有命令也应适用于Linux，尽管你**不需要**在那里安装
`pinentry-mac`。

```bash
$ brew install gnupg pinentry-mac
```

```bash
$ touch ~/.gnupg/gpg-agent.conf
$ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
$ echo 'export GPG_TTY=$(tty)' >> ~/.zshrc
```

如果你没有使用 ZSH 作为你的 shell，你需要将最后一行改为你的 shell
的配置文件。常见的是 `.bashrc` 或 `.bash_profile`。

## GPG

### 生成密钥

```bash
$ gpg --full-gen-key
```

### 列出你的密钥

```bash
$ gpg --list-secret-keys --keyid-format long

sec   rsa4096/<THIS-IS-YOUR-KEY-ID> 2021-03-17 [SC]
```

第一行是列出密钥时获取密钥 ID 的位置。

### 导入/导出密钥

```bash
# Public
$ gpg --import <KEYFILE>
$ gpg --armor --export <KEY-ID> | pbcopy

# Private
$ gpg --import --allow-secret-key-import <KEYFILE>
$ gpg --armor  --export-secret-key <KEY-ID> | pbcopy
```

## Git 配置

### 全局

```bash
$ git config --global commit.gpgsign true
$ git config --global gpg.program $(which gpg)
$ git config --global user.signingkey <KEY-ID>
```

你使用的密钥（`user.signingkey`）必须与你用于提交的电子邮件相同。

### 本地

如果你想要在每次提交时都签名，你可以使用

```bash
$ git clone <git@github.com:USER/PROJECT.git>
$ cd <PROJECT>

$ git config user.email "someone@example.com"
$ git config user.signingkey <KEY-ID>
```

如果你想要在每次提交时都签名，你可以使用

```bash
$ git commit -S -m "Message"
```
