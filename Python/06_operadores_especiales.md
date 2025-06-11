# Operaciones especiales

## División de enteros
```python
print(5 / 2)   # 2.5 (división flotante)
print(5 // 2)  # 2 (división entera, como Math.floor(5/2) en JS)
```
## Potencias
```python
cuadrado = 3 ** 2  # 9 (equivalente a 3 ** 2 en JS)
```
## Asignación aumentada
```python
x = 5
x += 3  # Como en JS
```

# 6. Funciones útiles
```python
abs(-5)         # Valor absoluto
round(3.1416, 2) # Redondeo a 2 decimales
pow(2, 3)       # Potencia (2^3)
```

**Consejo profesional**: Usa `Decimal` para cálculos monetarios y evita floats en estos casos. Para enteros grandes, Python los maneja automáticamente sin problemas (a diferencia de JS que necesita `BigInt`).

