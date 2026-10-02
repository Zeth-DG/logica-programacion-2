# Calculadora de Conversión de Temperaturas

Una pequeña aplicación web que convierte una temperatura ingresada en grados Celsius a grados Fahrenheit y Kelvin.

## Descripción

El usuario ingresa una temperatura en grados Celsius (°C) y, al presionar el botón de "convertir", la aplicación muestra el resultado equivalente en:
- Grados Fahrenheit (°F)
- Kelvin (K)

También incluye un botón para limpiar los resultados. El campo de ingreso de datos, se limpia en cada evento de click. 

## Tecnologías utilizadas

- HTML5
- CSS3 
- JavaScript 
- Bootstrap 5 (para estilos base)

## Estructura del proyecto
/
├── index.html
├── css/styles.css
├── main.js
└── README.md


## Cómo usarlo

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa una temperatura en grados Celsius.
4. Presiona el botón **"Convertir a Fahrenheit y Kelvin"**.
5. Verás los resultados debajo del botón.
6. Usa el botón **"Limpiar"** para borrar los resultados.

## Fórmulas utilizadas

- Fahrenheit: `°F = (°C × 9/5) + 32`
- Kelvin: `K = °C + 273.15`

## Paleta de colores

La interfaz usa una paleta de tonos rosa/vino.

## Posibles mejoras futuras

- Agregar conversión inversa (Fahrenheit/Kelvin a Celsius)
- Conversiones separadas °F y °K
- Validación más robusta de entrada (no campo vacío)
- Historial de conversiones
- Versión responsive mejorada para móviles
