// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parOimpar(numeroEntero){
    if(numeroEntero % 2 == 0 ){
        document.write(`${numeroEntero} es un numero par`)
    }else{
        document.write(`${numeroEntero} NO es un numero par`)
    }
}
let numeroX = parseInt(prompt('Escriba un numero entero'))
parOimpar(numeroX)