/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;
let numeros; 
do {
  numeros = prompt("Introducir número");
  if (numeros !== null) {
    if (!isNaN(numeros)) {
      suma += parseFloat(numeros);
    } else {
      alert("Eso no es un número. Por favor, introduce un número válido.");
    }
  }
} while (numeros !== null);
alert("La suma de los números es " + suma);



