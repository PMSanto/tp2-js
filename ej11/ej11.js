/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre1 = prompt("Ingresa el primer nombre");
let edad1 = prompt("Ingresa la primera edad");

let nombre2 = prompt("Ingresa el segundo nombre");
let edad2 = prompt("Ingresa la segunda edad");

let nombre3 = prompt("Ingresa el tercer nombre");
let edad3 = prompt("Ingresa la tercera edad");

let mayor_edad = Math.max(edad1, edad2, edad3);
let mayor_nombre;
if (mayor_edad === edad1) {
  mayor_edad === nombre1;
} else if (mayor_edad === edad2) {
  mayor_edad === nombre2;
} else if (mayor_edad === edad3) {
  mayor_edad === nombre3;
}
document.write(mayor_nombre + " es mayor");


// me devulve undefined al mostrar el nombre del mayor :(