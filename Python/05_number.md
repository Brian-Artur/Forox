# Number
## Enteros (`int`)
- **Equivalente a**: `number` en JS (pero sin límite de tamaño)
- **Características**:
    - Pueden ser de cualquier tamaño (no hay `MAX_SAFE_INTEGER` como en JS)
    - Base decimal (predeterminada), binaria, octal o hexadecimal
 - **Ejemplos**:
```python
num = 42
big_num = 123456789012345678901234567890  # ¡Válido en Python!
binario = 0b1010  # 10 en decimal (Prefijo 0b)
octal = 0o12      # 10 en decimal (Prefijo 0o)
hexa = 0xA        # 10 en decimal (Prefijo 0x)
```

## Flotantes (`float`)
- **Equivalente a**: `number` en JS para decimales
- **Características**:
    - Precisión doble (64-bit)
    - Notación científica disponible
- **Ejemplos**:
```python
 pi = 3.1416
 cientifico = 2.5e-3  # 0.0025
```

## Booleanos (`bool`)
- **Técnicamente son enteros** (`True == 1`, `False == 0`)
- **Ejemplo**:
```pytho
es_valido = True
```

## Números complejos (`complex`)
- **Formato**: `a + bj` (donde `j` es √-1)
- **Ejemplo**:
```python
 z = 3 + 4j
 print(z.real)  # 3.0
 print(z.imag)  # 4.0
```

## Fracciones (`fractions.Fraction`)
- **Precisión exacta** (evita problemas de redondeo con floats)
- **Ejemplo**:
```python
 from fractions import Fraction
 un_medio = Fraction(1, 2)
```

##  Decimales exactos (`decimal.Decimal`)
- **Para cálculos financieros** (precisión exacta)
- **Ejemplo**:
```python
 from decimal import Decimal, getcontext
 getcontext().prec = 6  # Precisión de 6 dígitos
 precio = Decimal('19.99')
```

# Conversión entre tipos
```python
# De string a número
num = int("42")
flotante = float("3.14")

# Entre numéricos
decimal_a_entero = int(3.99)  # 3 (truncamiento)
```
