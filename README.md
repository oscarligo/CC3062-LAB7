# CC3062-LAB7

## Resumen de cumplimiento

Esta implementación cubre los requerimientos funcionales y de calidad que sí están presentes en el repositorio. Abajo se documenta qué puntos ya están cubiertos y cuál es la evidencia en el código.

## Requerimientos cumplidos

| Requerimiento | Estado | Evidencia |
| --- | --- | --- |
| Interfaz con display y teclado HTML | Cumplido | La calculadora se compone de `Display` y `Keyboard`.
| Todo el input desde botones | Cumplido | El teclado dispara todas las acciones desde botones HTML.
| Concatenación de dígitos | Cumplido | El hook `useCalculator` maneja la entrada de dígitos y el borrado cuando corresponde.
| Operaciones encadenadas | Cumplido | Al presionar otra operación, el resultado se calcula inmediatamente.
| Botón `=` | Cumplido | El teclado incluye botón de igual para mostrar el resultado final.
| Punto decimal | Cumplido | El punto cuenta dentro del límite de 9 caracteres y se prueba explícitamente.
| División | Cumplido | La operación `/` está soportada y el formato limita el resultado a 9 caracteres.
| Módulo | Cumplido | La operación `%` está soportada tanto en lógica como en UI.
| Lógica en hook propio | Cumplido | `useCalculator` concentra el estado y la mayor parte del comportamiento.
| Archivos de componentes con menos de 20 líneas | Cumplido | `Calculator.tsx`, `Display.tsx` y `Keyboard.tsx` están por debajo del límite.
| Title y favicon distintos al default | Cumplido | `index.html` define un `title` propio y carga `/favicon.svg`.
| Uso de TypeScript | Cumplido | El proyecto usa archivos `.ts` y `.tsx` con configuración TypeScript.
| Lockfile comiteado | Cumplido | Existe `package-lock.json` en el repositorio.
| Lint configurado para no usar punto y coma | Cumplido | ESLint tiene `semi: ['error', 'never']`.
| Lint configurado con máximo 120 caracteres | Cumplido | ESLint tiene `max-len: ['error', { code: 120 }]`.
| Script `lint` para `.js`, `.jsx`, `.ts` y `.tsx` | Cumplido | El script `lint` ejecuta ESLint sobre esas extensiones.

## Cobertura de tests y stories

| Tipo | Cantidad | Detalle |
| --- | --- | --- |
| Tests | 6 | Hay pruebas para `useCalculator`, `utils` y el componente `Calculator`.
| Stories de Storybook | 3 | Hay stories para `Calculator`, `Display` y `Keyboard`.

## Requerimientos no evidenciados en el repo

| Requerimiento | Estado | Observación |
| --- | --- | --- |
| Función `+/-` | No cumplido | En el código actual solo existe la operación de resta `-`; no aparece una inversión de signo como acción separada.
| No usar `node` ni `npm` como package manager | No cumplido | El proyecto usa `npm` y tiene scripts típicos de ese ecosistema.

## Notas

La lógica también limita resultados y entradas a 9 caracteres, incluyendo decimales y resultados de operaciones como división y módulo.


## Comandos para tests, lint y stories

## Primero

```bash
npm install
```

## Linter

```bash
npm run lint
```
## Tests

```bash
npm run test
```

## Stories

```bash
npm run storybook
```
