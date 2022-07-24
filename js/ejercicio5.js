// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
//  A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas
// , sólo por minúsculas o por una mezcla de ambas.

function minusOmayus(texto){
    if(texto === texto.toUpperCase()){
        document.write('La cadena de texto esta formada unicamente por Mayusculas')
    }else if(texto === texto.toLowerCase()){
        document.write('La cadena de texto esta formada unicamente por Minusculas')
    }else{
        document.write('La cadena de texto esta formada por Mayusculas y Minusculas')
    }
}
let frase = prompt('Ingrese una cadena de texto')
minusOmayus(frase)