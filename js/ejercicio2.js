// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let nombreCiudades = [];
do {
  let ciudades = prompt("Ingrese el nombre de ciudades");
  nombreCiudades.push(ciudades);
} while (confirm("¿Quiere escribir mas Ciudades?"));
document.write(`<br>${nombreCiudades}</br>`)

document.write(`<br>Longitud del array: ${nombreCiudades.length}</br>`)

document.write
(`
  <br>Item 1: ${nombreCiudades[0]}</br> 
  <br>Item 3: ${nombreCiudades[2]}</br> 
  <br>Ultimo item: ${nombreCiudades[nombreCiudades.length - 1]}</br> 
`)

nombreCiudades.push('Paris')

document.write(`<br>${nombreCiudades}</br>`)

document.write(`<br>Item 2: ${nombreCiudades[1]}</br>`
)
nombreCiudades[1] = 'Barcelona'

document.write(`<br>${nombreCiudades}</br>`)