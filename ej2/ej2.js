/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido */

let nota = Number(prompt("Ingresa tu nota (del 0 al 10)"));

if (isNaN(nota)) {
  alert("No es un numero");
}
if (nota >= 0 && nota <= 10) {
  if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
  } else if (nota === 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else if (nota === 10) {
    alert("Sobresaliente");
  }
} else {
  alert("Numero erroneo");
}
