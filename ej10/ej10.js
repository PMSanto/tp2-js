/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let filas = prompt("introduce numero de filas");
let columnas = prompt("introduce numero de columnas");

if (
  filas !== null &&
  columnas !== null &&
  !isNaN(filas) &&
  !isNaN(columnas) &&
  filas >= 1 &&
  columnas >= 1
) {
  filas = parseInt(filas);
  columnas = parseInt(columnas);

  let numero = filas * columnas;

  for (let i = 0; i < filas; i++) {
    let fila = "";    
        for (let j = 0; j < columnas; j++) {
      fila += numero ;
      numero--;
    }
    document.write(fila);
    
  }
  
} else if (filas !== null && columnas !== null) {
  alert("Ingresa números válidos mayores o iguales a 1");
}

// no queda acmodado como tabla :c
