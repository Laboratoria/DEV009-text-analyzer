const analyzer = {  
  getWordCount: (text) => {
    //console.log("este es el texto: " + text);
    // se declara la variable palabrasseparadas y se le asigna el valor del texto que se recibe dividido en palabras
    const palabrasseparadas = text.split(" ");
    // se declara la variable arrsinespacios y por medio de la funcion filter se le eliminan los espacios de la variable palabrasseparadas
    const arrsinespacios = palabrasseparadas.filter(palabra => palabra !== '');
    //console.log("esto es lo que hace el split: ", text.split(" "));
    //console.log("esto es lo que hace el filter", arrsinespacios);
    // se declara la variable nunpalabras y se le asigna el tamaño del arreglo arrsinespacios
    const numpalabras = arrsinespacios.length;
    //console.log("esto es lo que hace el length: ", numpalabras);
    // se retorna la variable numero de palabras como resultado 
    return numpalabras;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
 
    
};

export default analyzer;
