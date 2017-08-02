# imc-calculator
node JS training by Zemoga

## Objetivo

Crear una aplicación que calcule el índice de masa corporal (IMC).

1. Recibir los siguientes argumentos por la línea de comando: altura (cm) y masa (kg).

2. Escribir por pantalla:

* Fecha y hora del sistema.
* El nombre de usuario del sistema.
* Valor del IMC.
* La clasificación del resultado según la siguiente tabla:

| IMC           | Clasificación                 | Color    |
|---------------|-------------------------------|----------|
| < 16          | Infrapeso: Delgadez Severa    | Rojo     |
| 16.00 - 16.99 | Infrapeso: Delgadez moderada  | Rojo     |
| 17.00 - 18.49 | Infrapeso: Delgadez aceptable | Naranja  |
| 18.50 - 24.99 | Peso Normal                   | Verde    |
| 25.00 - 29.99 | Sobrepeso                     | Amarillo |
| 30.00 - 34.99 | Obeso: Tipo I                 | Rojo     |
| 35.00 - 39.99 | Obeso: Tipo II                | Rojo     |
| >40.00        | Obeso: Tipo III               | Rojo     |

## Recomendaciones
* Utilizar la librería [Commander JS](https://github.com/tj/commander.js/) para facilitar la lectura de los parámetros por línea de comando. 
* Utilizar la librería [Chalk](https://www.npmjs.com/package/chalk) para escribir el color de la clasificación
* La información del usuario autenticado puede ser obtenida de `process.ENV`.

[Ejercicio Siguiente >](https://github.com/efrivera/IMC-calculator-4)
