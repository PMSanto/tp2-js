/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
let edad = Number(prompt("Ingresa tu edad"));
if (isNaN(edad)) {
  console.log("no es un numero");
} else if (edad >= 18) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir, es menor de edad");
}
