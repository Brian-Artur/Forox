# Instalar LAMP
## 1. Entrar como super usuario (root)
- `su -`  
- Luego escribimos la contraseña

## 2. Actualizar Debian
### 2.1. Edita archivo de fuentes
Ya que hemos hecho una instalación desde una ISO, sin que tenga que conectarse a internet; esta va a buscar las actualizaciones en esa misma ISO. Pero al no estar montada, ya no las podrá encontrar.
```bash
nano /etc/apt/sources.list
```
Por eso editamos el archivo *"sources.list"*. 
```ini
# deb cdrom: [Debian GNU/Linux 12.11.0 ...]
deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
```

### 2.2. Actualizar paquetes del sistema
Una vez que hemos modificado el archivo. Ya tendremos acceso al los paquetes reales de Debian.  
```bash
apt update && apt upgrade
```


## 3. Instalar dependencias básicas
### 3.1. Instalamos Apache
```bash
sudo apt install apache2 mariadb-server php php-mysql php-curl php-gd php-mbstring php-xml php-zip unzip wget -y
```


## 3. Apache
### 
```bash
apt install apache2
```
Con `systemctl status apache2` comprobamos que el servidor se inicia correctamente.

### 3.2. Iniciar al encender
```ini
systemctl aneble apache2
```
Ya sincroniza el estado de apache2 con el inicio del sistema operativo.

## 4. MariaDB
### 4.1. Instalar MySQL/MariaDB
MariaDB va a ser quien gestione nuestra base de datos de WordPress.
```bash
apt install mariadb-server
```
De igual forma, podemos comprobar que MariaDB esté corriendo. Empleamos el mismo comando ``systemctl status mysql``

### 4.2. Iniciar al encender
```bash
systemctl aneble mariadb
```
Ya sincroniza el estado de mariadb con el inicio del sistema operativo. Ojo, aquí **no vale poner `mysql`**.

### 4.3. Configurar MariaDB
 Vamos a hacerle una configuración inicial de seguridad a MariaDB.
 ```bash
mysql_secure_installetion
```
1. Introducir la password del usuario root.
2. Swtich to unix_socket authentication : **n**
3. Change the root password? : **n**
	- Vamos a tener la aplicación de forma local.
4. Remove anonymous users? : **y**
5. Disallow root login remotely? : **y**
	- Esto se refiere a la conexión por SSH. Para que se pueda entrar a la base de datos mediante root desde otro equipo. Es más recomendable crear otro usuario para que se conecte a la base de datos remotamente.
6. Remove test database and access to it? : **y**
7. Reload privilege tables now? : **y**
	- Para que se aplique los cambios.

### 4.4. Entrar en la base de datos
```bash
mysql -u root -p
```
Nos pide alguna contraseña. Pero como no le hemos puesto ninguna, le podemos dar intro sin más.

Escribimos `exit` para salir de MariaDB.

## 5. PHP
### 5.1. Comprobar última versión de PHP
```bash
apt search php
```
Debemos realizar este paso, ya que en los sistemas Debian, suele tener una versión menos actualizada de los paquetes, que los sistemas Ubuntu.

### 5.2. Instalar PHP
Junto con PHP, vamos a instalar otros módulos para hacer la conexión con la base de datos y el servidor Apache
```bash
apt install php libapache2-mod-php php-mysql
```

### 5.3. Verificar PHP
```bash
php -v
```
