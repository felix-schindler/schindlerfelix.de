# Linux

## 新增使用者

```bash
# 連線至伺服器
$ ssh root@123.123.123.123

# 新增具有 sudo 權限的使用者
$ sudo useradd -mG sudo felix

# 設定新使用者的密碼
$ sudo passwd felix

# 以新使用者登入
$ su - felix
```

要檢查使用者是否有 sudo 權限，你可以執行 `sudo ls /root` 並使用 `groups felix`
檢查使用者的群組。

從現在開始，你可以使用你的使用者名稱而不是 `root` 進行連線。我也喜歡將使用者和
IP 的變數添加到我的 `.zshrc` 文件中，這樣我就不必記住使用者名稱和 IP。

```bash
$ ssh felix@123.123.123.123

# 將變數添加到 .zshrc
$ echo "export SERVER_NAME=felix@123.123.123.123" >> ~/.zshrc
$ ssh $SERVER_NAME
```

## 提高安全性

### 使用金鑰驗證取代密碼

SSH
金鑰比密碼更安全且更方便。在本地設備上生成它們，然後將它們添加到伺服器上。如果你已經有一個金鑰，只需使用它。

```bash
# 產生 SSH 金鑰
$ ssh-keygen -t ed25519

# 上傳公鑰至伺服器
$ scp ~/.ssh/id_ed25519.pub felix@123.123.123.123:~/.ssh/authorized_keys

# 在伺服器上設定正確的權限
$ ssh felix@123.123.123.123
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
```

在使用 `scp` 時，請注意不要覆蓋 `authorized_keys`
文件。如果你已經在伺服器上有金鑰，則應該附加新金鑰，而不是覆蓋文件。

在將金鑰添加到伺服器後，你可以完全禁用密碼驗證。為此，打開 `sshd_config` 並將
`PasswordAuthentication yes` 更改為
`PasswordAuthentication no`。更改配置後，你需要重新啟動 SSH 服務以應用更改。

```bash
# 更改配置
$ sudo nano /etc/ssh/sshd_config

# 重新啟動 SSH 服務
$ sudo systemctl restart sshd
```

### Firewall

你可以使用 `ufw` 作為簡單的防火牆，**但不要忘記在啟用之前允許 SSH
端口**，否則你將**失去對該伺服器的訪問**。

```bash
# 允許新端口
$ ufw allow PORT

# 刪除允許的端口
$ ufw delete allow PORT

# 顯示防火牆規則
$ ufw status

# 啟用防火牆
$ ufw enable
```

## 有用的命令

```bash
# 顯示當前使用的端口
$ lsof -i -P -n

# 顯示所有硬碟大小
$ df -h
```

### 快速移動大量文件

`rsync`
是一個快速且多功能的文件複製工具。它非常適合備份，但你也可以使用它來部署網站等。選項僅為我的個人偏好，你可以根據自己的需求進行調整。

```bash
$ rsync -avhrz --delete build/ felix@123.123.123.123:/var/www/DOMAIN/
```

## Updates

## 更新

```bash
# 將 Ubuntu 更新至最新版本
$ sudo do-release-upgrade

# 更新套件
$ sudo apt update
$ sudo apt upgrade
$ sudo apt dist-upgrade

# 移除舊套件
$ sudo apt autoremove
```

## 根據我的需求安裝常用套件

請不要盲目複製和粘貼此列表。只安裝你需要的東西。你也可以安裝
Docker，而不是手動安裝所有這些東西。

### Web 伺服器 - Caddy

```bash
$ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
$ sudo apt update
$ sudo apt install caddy
```

### JAMstack

```bash
# 安裝 Node.js
$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt install -y nodejs

# 安裝 Deno
$ curl -fsSL https://deno.land/x/install/install.sh | sh

# 安裝 Bun
$ curl -fsSL https://bun.sh/install | bash
```

### PHP

```bash
$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt update
$ sudo apt install php8.3 php8.3-fpm php8.3-mysql php8.3-mbstring php8.3-zip
```

### 数据库

```bash
# PostgreSQL
$ sudo apt install postgresql

# MariaDB
$ sudo apt install mariadb-server
$ sudo mysql_secure_installation
```
