import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const Element= document.getElementById("reset-button");
Element.addEventListener("click", BorrarTexto);

function BorrarTexto() {
    let texto = document.getElementsByName("user-input");
    texto[0].value ="";
}
function analizar(){
    let texto = document.getElementsByName("user-input")[0].value;
    numeroPalabras(texto)
}
function numeroPalabras(texto){
    analyzer.getWordCount(texto);
}