const analyzer = {  
  getWordCount: (text) => {
    console.log("este es el texto: " + text);
    var palabrasseparadas = text.split(" ");
    var arrsinespacios = palabrasseparadas.filter(palabra => palabra !== '');
    console.log("esto es lo que hace el split: ", text.split(" "));
    console.log("esto es lo que hace el filter", arrsinespacios);
    var numpalabras = arrsinespacios.length;
    console.log("esto es lo que hace el length: ", numpalabras);
    return numpalabras;
        //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
 
    
};

export default analyzer;
