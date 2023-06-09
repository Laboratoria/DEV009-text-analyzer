import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// se crea la contante element para asignarle el valor del elemento que tiene el id reset-buton
const Element = document.getElementById("reset-button");
// a la variable elemento se le agrega un eventListener para que se ejecute al hacer click y llame a la funcion que esta entre parentesis
Element.addEventListener("click", BorrarTexto);

// se crea la constante caja de texto para asignarle el elemento con nombre user-input y que se encuentra en la posision 0
const cajadetexto = document.getElementsByName("user-input")[0];
// a la variable caja de texto se le agrega un eventlistener que se ejecuta al escribir con el teclado y que llama a la funcion que se encuentra entre parentesis
cajadetexto.addEventListener("keyup", analizar);

// se declara la variable resultado como global para poder usarla en todas las funciones
let resultado = "";

function BorrarTexto() {
  // se declara la variable texto y se le asigna el elemento que tenga el nombre user-input
  const texto = document.getElementsByName("user-input")[0];
  // al valor que esta en la posicion cero de la variable texto se le asigna vacio para borrar el valor
  texto.value = "";
  resultado = "";
  // se llama la funcion analizar para que esta se ejecute y llene los li con el nuevo valor de resultado
  analizar();
}
function analizar() {
  // saca el valor de todos los elementos que tengan el nombre user-input
  //saca el valor del elemento que esta en la posicion cero
  resultado = document.getElementsByName("user-input")[0].value;
  // Selecciona el elemento que tine la clase palabras, y el innerhtml permite asignar un valor al contenido de este elemento
  // despues del igual se concatena el valor de la palabra palabras con el valor que retorna el metodo getWordCount
  document.querySelector(".Palabras").innerHTML = "Palabras &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + analyzer.getWordCount(resultado);
  document.querySelector(".Caracteres").innerHTML = "Caracteres &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + analyzer.getCharacterCount(resultado);
  document.querySelector(".Caracteressinespacios").innerHTML = "Caracteres sin espacios &nbsp;&nbsp;&nbsp; " + analyzer.getCharacterCountExcludingSpaces(resultado);
  document.querySelector(".Promediolongitud").innerHTML = "Promedio Longitud &nbsp;&nbsp;&nbsp; " + analyzer.getAverageWordLength(resultado);
  document.querySelector(".Numeros").innerHTML = "Numeros &nbsp;&nbsp;&nbsp; " + analyzer.getNumberCount(resultado);

}






