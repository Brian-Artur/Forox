# Moverse entre directorios
- `pwd` : para saber donde ==estamos==, en qué carpeta
- *ctrl + l* : limpiar terminal bash
- `ls -l` : devuelve lista de archivos
- `ls -la` : devuelve lista **con archivos ocultos**. 
>Cuando un archivo/directorio lleva espacios, hay que envolverlo entre comillas
- `nano` : es para crear el archivo que quieras desde la consola
	- ctrl + x : salir
	- y : guardar
	- intro  
- `cat archivo.txt` Para ver el contenido de un archivo

![[Drawing 2025-03-30 07.25.53.excalidraw|250]] 
Palabra completa va con 2 `--` Ej: `ls --all`
Pero si va una sola letra, porque es una abreviatura, va 1 solo `-` Ej: `ls -a`
En el caso de queramos usar dos veces un `-` palabras `ls -a -l`
Podemos resumirlo en `ls -al`

`mv "nombreActual" "nuevoNombre"` para renombrar

# Directorios
![[Drawing 2025-03-30 10.35.07.excalidraw]]
### Configuranción Git
- `git config --global user.email "email"`
- `git config --global user.name "NickName"`
- `git config --list` : para ver nuestros datos.  *q* : salir
### Iniciar proyecto Git
- `git init` : para inicializar un repositorio con GIT.
	- Con esto ya vamos a poder realizar el control de versiones.
- `git add .` : le da seguimiento a ese archivo
- `git add *.html` para subir los archivos con la extensión html.
- `git commit -m "Initial commit"` : confirmación de los cambios. *"Update file"* Actualización de archivo.
- `git commit --amend -m "mensajeCoregido"` Sólo modifica el mansaje, nada más.

### Volver a commit anterior
- `git reset --soft b6ed4525` : para volver a una versión anterior, sin destrucción
- `git reset --hard b6ed4525` : para volver a una versión anterior, con destrucción *NO HACER NUNCA!!*

![Areas de Git|500](git.svg)

---
Cualquier comando que aparezca entre `[]` significa que es opcional.
### Git help
Cuando no sepamos qué significa un comando, podemos usar un `--help` para ayudarnos. 
`git push --help`
`git help push` realiza la misma operación.

Hay 3 lugares diferentes en donde se puede usar GIT. `--system` `--global` `--local`

![[Drawing 2025-03-30 10.53.35.excalidraw|450]]

`git config --global -e` NO USAR NUNCA. Porque podemos modificar cosas aquí;  y la idea es hacerlo desde fuera.

`git branch -m main` para cambiar el nombre de la rama que estamos usando

La carpeta *.git* es la encargada de hacer el seguimiento de los archivos que hay en esa carpeta.

`git rm --cached <file>` sirve para sacar ese archivo de la etapa de stage.
`git rm --cached -r .` para sacar varios archivos dentro de carpetas.

Reinicializar un repositorio con `git init` no hace que se pierda lo que ya tienes hecho.

---
![[Drawing 2025-03-30 07.54.15.excalidraw|350]]
`git reset carpeta`  forma antigua de hacer un reset de lo que esté en el stage.
### Configuración Git
`git config --global init.defaultBranch main` Para que utilice rama `main` por defecto.
`git config --global core.autocrlf true` Para habilitar el CRLF en los archivos que se le hagan commit.

`git log --oneline` Para que nos diga los commit que ha habido en sólo una línea.

Regresamos a un commit anterior, de forma blanda. `HEAD~1`

`git checkout -- .` va a llevar atrás lo que no esté en el repositorio

### Ramas
`git branch` Para saber en qué rama nos encontramos.
`git branch -m "nombre"` Para cambiar el nombre de una rama.
`git branch -m "nombreActual" "nombreNuevo"` Renombrar una rama distinta a la que estamos.
> Una rama viene a ser una versión alterna del mundo en el que estamos.

---
`git branch --move nombre-antiguo nombre-nuevo` Renombrar rama
`git checkou -b "nuevaRama"` Para crear una nueva rama y movernos a esa.
`git branch "nuevaRama"` Para crear nueva rama sin cambiarnos de rama.
`git branch` Para ver cuantas ramas hay
`git switch "rama"` Para cambiarnos a esa rama
`touch archivo` para crear el archivo en blanco.
`git merge rama` Para traer los cambios que se han hecho en esa rama, a la rama en la que estamos.
> En caso de que tengamos que hacer un *merge* de otra rama `git merge develop` , pisando los cambios que se han hecho, va a tener que ser un marge 'ort', una "fusion bruta".
### Editor de código
```
$ git config --global --get core.editor
'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar
-nosession -noPlugin
```
Para utilizar el Notepad++ como editor por defecto con Git Bash. 
Cuando usemos `git commit` nos abrirá ese editor. Y ahí tenemos que guardarlo; no sin antes escribiendo el la primera línea el nombre que queremos que tenga ese commit.
`git config --global core.editor "code --wait"` para volver al VSCode por defecto.

---
> [!tip]
> En caso de que tengamos mucho Archivos que comienzan con el mismo nombre, al darle TAB nos va a parar en la parte que se repite. Es ahí cuando debemos escribir la diferencia. Cuando lo hagamos, ya podremos volver a hacer otro TAB para autocompletar el resto.

> Normalmente los commit se nombrar comenzando por un verbo. 

Parra GIT, ese repositorio/carpeta que esté vacío, no lo va a tener en cuenta; no le va a dar seguimiento. Para estos casos lo mejor es meter un *README.md*, y dentro poner la futura finalidad de esa carpeta. Otra cosa que puedes hacer es meter un *empty.info* o con la extensión que quieras. Es una forma parecida, pero otro desarrollador no va a saber qué finalidad tiene.
`git commit --allow-empty -m "mensaje del commit"` Para hacer un commit vacío, sin tener que crear un archivo.

`git commit --amend -m "add . gitkeep -> new-folder"` El --amend sirve para renombrar el último commit.
`git commit --amend -m "add 'ignorar carpeta/' rule -> .gitignore"`
`git commit --amend -m "add << ignorar carpeta/ >> rule -> .gitignore"`
 
[Sourcetree](https://www.sourcetreeapp.com/) Interfaz gráfica para usar Git. Alternativa a GitHub Desktop

---
Si estamos modificando el nombre de un archivo, lo que va a pasar es que primero crea una copia de ese con el nombre deseado. Luego elimina el archivo antiguo.

![[visualizar deltas.svg]]

`git diff` para ver los cambios que se han hecho sin haber comiteado aún.

> Debemos ir comiteando paso por paso para llevar un orden. Como un banco de trabajo, poder encontrar fácilmente cada uno de los cambios.

`git commit -am "mensaje"` Fusión entre *git add* y *git commit*. No se puede emplear si el archivo no está traqueado.

`git reset --mixed ec225ae` No es aconsejable porque vamos a modificar sin querer, archivos con los que estamos trabajando actualmente.

---

![[Drawing 2025-03-30 11.10.22.excalidraw]]
### Commit temporal
![[Drawing 2025-03-30 11.47.19.excalidraw|600]]

### Merge
![[Pasted image 20250321145550 1.png]]

![[Draw 25-03-21 12.20.24.excalidraw]]
Es una buena práctica poner un "resolución de conflicto *'Rama arrastrada'* ".

---
### Etiquetas
![[Draw 25-03-24 11.57.27.excalidraw|500]]

---
[Gitflow Git Tutorial](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow) Trabajar con Git-Flow en lugar de GitHub
### Stash / Commit temporal
El **Stash** está pensado como un pequeño bolsillo para dejar allí lo que no es tan urgente. Porque ahora mismo se nos ha pedido trabajar en otra cosa mucho más urgente. Sirve como bolsillo y taburete donde apoyamos aquello en lo que estábamos centrados, pero que debemos dejar en una pequeña pausa. *Lo ideal es no meter más de 2 cosas*.

![[Draw 25-03-25 12.35.59.excalidraw]]

![[Draw 25-03-25 12.53.13.excalidraw|450]]
`git stash` Guardar los cambios no comiteados en un stash
`git stash save "nota aclaratoria"` Se le coloca una nota al último stash
`git stash pop` Saca el último stash y lo aplica al código actual
`git stash apply stash@{2}` Colocarse espacio-temporalmente en ese stash
`git stash drop` Elimina el último stash *sin aplicarlo*.
`git stash show stash@{2}` "Ver" la información en ese stash
`git stash list` lista de los stash que hay
`git stash list --stat` Muestra la lista pero más apliada

| **Commands**    | **Description**                                      |
| --------------- | ---------------------------------------------------- |
| git stash       | To stash the changes in a dirty working directory    |
| git stash pop   | Write working from the top of the stash stack.       |
| git stash list  | List the stack-order of stashed file changes.        |
| git stash drop  | Discard the changes from the top of the stash stack. |
| git stash clear | To remove all the stashed entries                    |
### Rebase
NO hacer un **rebase** si ya se ha subido el repositorio a la nube. Ya que puede petar todo.
![[Draw 25-03-25 13.34.51.excalidraw|500]]

`git commit --allow-empty -m "mensaje del commit"` Para hacer un commit vacío, sin tener que crear un archivo.

`git branch nueva-rama otra-rama` Crea la rama *nueva-rama* basada en *otra-rama*.

---
![[Drawing 2025-03-26 09.16.25.excalidraw|600]]
## Funcionalidades del `rebase` interactivo

| **Comando** | **Función**                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `pick`      | Mantiene el commit sin cambios.                                        |
| `reword`    | Modifica el mensaje del commit.                                        |
| `edit`      | Permite modificar los cambios del commit.                              |
| `squash`    | Fusiona este commit con el anterior.                                   |
| `fixup`     | Igual que `squash`, pero descarta el mensaje del commit.               |
| `drop`      | Elimina el commit.                                                     |
| `break`     | Pausa el rebase en ese punto para realizar modificaciones manualmente. |

---
### Rebase Interactivo
`git rebase -i ` Rebase interactivo
![[Drawing 2025-03-27 10.44.55.excalidraw|500]]

![[Drawing 2025-03-27 11.01.19.excalidraw|500]]

`git checkout ramaQueTrabajamos` Para regresar a la rama en la que estabamos trabajando. Pues mientras entábamos con el interactivo, Git se encontraba en un "limbo", bucle temporal.
`git rebase --abort` Para abortar el rebase

`git checkout -- nombreArchivo` Para sacar del stage ese archivo 

## Buenas prácticas
1. Hacer un commit inicial vacío
2. Crear un README.md
3. Hacer un commit para señalar ese README
4. Comenzar a trabajar en el proecto

![[Drawing 2025-03-27 13.14.53.excalidraw]]
