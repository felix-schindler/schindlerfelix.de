# Linux

## Adding a new user

```bash
# Connect to a server
$ ssh root@123.123.123.123

# Add a new user with sudo privileges
$ sudo useradd -mG sudo felix

# Set a password for the new user
$ sudo passwd felix

# Login as new user
$ su - felix
```

To verify the user has sudo privileges you can run `sudo ls /root` and check the
user's groups with `groups felix`.

From now on when connecting, you can use your user instead of `root`. I also
like to add a variable of the user and IP to my `.zshrc` file so I don't need to
remember username and ip.

```bash
$ ssh felix@123.123.123.123

# Add variable to .zshrc
$ echo "export SERVER_NAME=felix@123.123.123.123" >> ~/.zshrc
$ ssh $SERVER_NAME
```

## Improve security

### Key authentication instead of passwords

SSH keys are more secure and convenient than passwords. Generate them on your
local device and then add them to a server. If you already have a key, just use
that one.

```bash
# Generate SSH keys
$ ssh-keygen -t ed25519

# Upload the public key to the server
$ scp ~/.ssh/id_ed25519.pub felix@123.123.123.123:~/.ssh/authorized_keys

# Set the correct permissions on the server
$ ssh felix@123.123.123.123
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
```

When using `scp` be aware of overwriting the `authorized_keys` file. If you
already have keys on the server, you should append the new key instead of
overwriting the file.

After adding your key to the server, you can disable password authentication
altogether. For this open the `sshd_config` and change the line
`PasswordAuthentication yes` to `PasswordAuthentication no`. After changing the
config you need to restart the SSH service to apply the changes.

```bash
# Change config
$ sudo nano /etc/ssh/sshd_config

# Restart the SSH service
$ sudo systemctl restart sshd
```

### Firewall

You can use `ufw` as a simple firewall, just **don't forget to allow the SSH
ports before enabling it** otherwise you are going to **lose access to this
server**.

```bash
# Allow a new port
$ ufw allow PORT

# Remove an allowed port
$ ufw delete allow PORT

# Show the status of the firewall
$ ufw status

# Activate the firewall
$ ufw enable
```

## Utils

```bash
# Show currently used ports
$ lsof -i -P -n

# Show all disc sizes
$ df -h
```

### Move a lot of files, fast

`rsync` is a fast and versatile file copying tool. It's great for backups but
you can also use it to deploy websites and much more. The options are just my
personal preference, you can adjust them to your needs.

```bash
$ rsync -avhrz --delete build/ felix@123.123.123.123:/srv/DOMAIN/
```

## Updates

```bash
# Update Ubuntu to the latest version
$ sudo do-release-upgrade

# Update packages
$ sudo apt update
$ sudo apt upgrade
$ sudo apt dist-upgrade

# Remove old packages
$ sudo apt autoremove
```

## Install common packages, based on my needs

Please don't just blindly copy and paste this list. Only install what _you_
need. Instead of installing all these things manually you can also just install
Docker.

### Web server - Caddy

```bash
$ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
$ sudo apt update
$ sudo apt install caddy
```

### JAMstack

```bash
# Install Node.js
$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt install -y nodejs

# Install Deno
$ curl -fsSL https://deno.land/x/install/install.sh | sh

# Install Bun
$ curl -fsSL https://bun.sh/install | bash
```

### PHP

```bash
$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt update
$ sudo apt install php8.3 php8.3-fpm php8.3-mysql php8.3-mbstring php8.3-zip
```

### Database

```bash
# PostgreSQL
$ sudo apt install postgresql

# MariaDB
$ sudo apt install mariadb-server
$ sudo mysql_secure_installation
```
