/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
*/

let numero = prompt("Por favor, ingresa un número no mayor de 50:");
if (numero !== null && !isNaN(numero) && numero >= 1 && numero <= 50) {
  numero = parseInt(numero);
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(i);
    }
    document.write("<br />");
  }
} else if (numero !== null) {
  alert("Por favor, ingresa un número válido entre 1 y 50.");
}
