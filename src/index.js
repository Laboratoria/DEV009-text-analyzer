import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// se crea la contante element para asignarle el valor del elemento que tiene el id reset-buton
const Element= document.getElementById("reset-button");
// a la variable elemento se le agrega un eventListener para que se ejecute al hacer click y llame a la funcion que esta entre parentesis
Element.addEventListener("click", BorrarTexto);

// se crea la constante caja de texto para asignarle el elemento con nombre user-input y que se encuentra en la posision 0
const cajadetexto= document.getElementsByName("user-input")[0];
// a la variable caja de texto se le agrega un eventlistener que se ejecuta al escribir con el teclado y que llama a la funcion que se encuentra entre parentesis
cajadetexto.addEventListener("keyup", analizar);

// se declara la variable resultado como global para poder usarla en todas las funciones
var resultado = ""; 

function BorrarTexto() {
    // se declara la variable texto y se le asigna el elemento que tenga el nombre user-input
    let texto = document.getElementsByName("user-input");
    // al valor que esta en la posicion cero de la variable texto se le asigna vacio para borrar el valor
    texto[0].value ="";
    resultado ="";
    // se llama la funcion analizar para que esta se ejecute y llene los li con el nuevo valor de resultado
    analizar();
}
function analizar(){
    // saca el valor de todos los elementos que tengan el nombre user-input
    //saca el valor del elemento que esta en la posicion cero
    let texto = document.getElementsByName("user-input")[0].value;
    // llama a la funcion numeroPalabras y le envia el texto
    numeroPalabras(texto);
}    
// funcion que obtiene el numero de palabras de la variable texto que recibe
function numeroPalabras(texto){
    // se llama la funcion getWordCount y se le pasa el texto, el valor que retorna se le asigna a nunpalabras
   resultado = analyzer.getWordCount(texto);
   // se declara la constante matches y se le asigna todos los elementos que sean un li
   const matches = document.querySelectorAll("li");
   // al primer elemento de matches se le asigna el valor palabras mas la variable resultado que contiene el numero de palabras
   matches[0].innerHTML = "Palabras " + resultado;
}


