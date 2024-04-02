/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = prompt("ingrese un numero no mayor de 50");
if (numero !== null && !isNaN(numero) && numero >= 1 && numero <= 50) {
  numero = parseInt(numero);
  for (let i = numero; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      document.write(i);
    }
    document.write("<br />");
  }  
} else if (numero !== null) {
  alert("ingresa un número válido entre 1 y 50");
}
