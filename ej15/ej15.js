/* 15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let cadena = "Aqui no hay agüita";
let resultado = 0;
cadena = cadena.toLocaleLowerCase();

for (let i = 0; i < cadena.length; i++) {
  if (
    cadena.at(i) === "a" ||
    cadena.at(i) === "e" ||
    cadena.at(i) === "i" ||
    cadena.at(i) === "o" ||
    cadena.at(i) === "u" ||
    cadena.at(i) === "á" ||
    cadena.at(i) === "é" ||
    cadena.at(i) === "í" ||
    cadena.at(i) === "ó" ||
    cadena.at(i) === "ú" ||
    cadena.at(i) === "ü"
  ) {
    resultado++;
  }
}
console.log(resultado);
