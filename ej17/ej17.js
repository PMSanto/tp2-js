/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1 */

let texto = prompt("Ingresa un texto:");
let textoMinusculas = texto.toLowerCase();
let primeraVocalPosicion = -1;
for (let i = 0; i < textoMinusculas.length; i++) {
  let caracter = textoMinusculas.charAt(i);
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    primeraVocalPosicion = i + 1;
    break;
  }
}
if (primeraVocalPosicion !== -1) {
  alert(
    "La primera vocal es " +
      texto.charAt(primeraVocalPosicion - 1) +
      " en la posición " +
      primeraVocalPosicion
  );
} else {
  alert(" No se encontraron vocales en el texto");
}
