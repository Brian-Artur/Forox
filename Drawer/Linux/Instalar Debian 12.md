# Instalar Máquina Virtual
## Descargar ISO
En el siguiente [enlace](https://www.debian.org/distrib/index.es.html) se puede descargar la iso de Debian 12. Hay que asegurarse de que es la versión que pone *"iso de DVD para PC de 64bits"*. 

## Montamos la ISO
Hay que acordarse de configurar el adaptador de red a "Adaptador puente" para estar conectados a internet con nuestra propio tarjeta de red. De forma predefinida tiene "NAT".

## Configuración de instalación
Vamos a seleccionar una instalación en un entorno gráfico, para facilitar la instalación. Luego tendremos que ir completando bloques de texto y seleccionando checkboxes.
![[ED2025-06-08_09.55.03]]
![[ED2025-06-08_10.01.54]]

![[ED2025-06-08_10.17.52]]
Antes de finalizar la instalación. Debemos asegurarnos de que la ISO ya no está montada en la máquina virtual. 
![[ED2025-06-08_10.33.15]]
## Gráficos de Máquina Virtual
Insertamos una ISO para acciones adicionales de invitado.  
![[ED2025-06-07_10.33.47|300]]   
Hacemos doble click en la ISO y abrimos un terminal allí dentro.   
![[ED2025-06-07_10.37.37]]  
Una vez dentro, escribimos los siguientes comandos.
```bash
su - 
# password
cd /media/cdrom0
ls
sh VBoxLinuxAdditions.run
reboot
```
