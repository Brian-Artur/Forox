## 1. 🔢 **Subconsulta Escalar (La Unitaria)**
**Definición:** Una subconsulta que devuelve **exactamente un valor** (1 fila, 1 columna), como un hechizo preciso.
**Características:**
- Se usa con operadores de comparación (`=`, `>`, `<`, `>=`, `<=`, `!=`)
- Si devuelve 0 filas → Resultado es `NULL`    
- Si devuelve +1 fila → ERROR (por eso debe garantizar un solo resultado)
![ED2025-05-21_08.58.17|300](ED2025-05-21_08.58.17.md)   
## 2. 📜 **Subconsulta de Lista (La Multiplicadora)**
**Definición:** Devuelve **múltiples filas de una sola columna**, como un conjuro que genera varios elementos.
**Características:**
- Se usa con operadores `IN`, `NOT IN`, `ANY`, `ALL`, `EXISTS`   
- Esencial para filtros basados en conjuntos
![ED2025-05-21_09.06.57|320](ED2025-05-21_09.06.57.md)    
