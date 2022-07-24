// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
//  luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function rectangulo(lado1, lado2){
    let sumarLados = lado1 + lado2
    document.write(`El perimetro del rectangulo es ${2*(sumarLados)}`)
}
let ladoA = parseInt(prompt('Ingrese el valor del lado A del rectangulo'))
let ladoB = parseInt(prompt('Ingrese el valor del lado B del rectangulo'))
rectangulo(ladoA, ladoB)