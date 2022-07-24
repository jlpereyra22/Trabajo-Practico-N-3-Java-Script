// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario

function tabla(numeroX){
    document.write(`<h2>Tabla del 1 a 10 del numero ${numeroX}<h2>`)
    document.write(`<table> <tbody>
    <tr>`)
    for(let i = 1; i <= 10; i++){
        document.write(`<td>${numeroX}*${i}=${numeroX * i}</td>`)
    }
    document.write(`</tr>
    </tbody> </table>`)
}
let numero = parseInt(prompt('Ingrese un numero'))
tabla(numero)