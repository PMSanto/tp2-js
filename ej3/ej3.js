/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let cadena = "";
do {
  let texto = prompt("Introduce algun texto");
  if (texto !== null) {
    cadena += texto + "-";
  }
} while (confirm("Agregue mas texto o haga click en cancelar"));
if (cadena !== "") {
  cadena = cadena.slice(0, -1);
  alert("" + cadena);
} else {
  alert("No ingreso cadenas");
}
