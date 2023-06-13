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
    const numcaracteres = text.length;// por medio le length esta contando el numero de caracteres en el texto
    return numcaracteres;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const caracteressinespacios = (text.replace(/\s/g, ''));// se quitan los espacios y signos de puntuación
    const sinespacios = caracteressinespacios.replace(/[^a-zA-Z0-9 ]/g, '');// quita los simbolos especiales a la cadena
    return sinespacios.length;// cuenta los caracteres sin espacios ni simbolos especiales
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabrasseparadas = text.split(" ");// se separa el texto en palabras
    const arrsinespacios = palabrasseparadas.filter(palabra => palabra !== '');// al arreglo se le quitan los espacios
    let suma = 0;
    for (let i = 0; i < arrsinespacios.length; i++) {// por medio de for recorre la cadena y va contando los caracteres sin los espacios
      suma += arrsinespacios[i].length;// define suma es el conteo de caracteres sin espacios
    }
    const media = suma / arrsinespacios.length;// declara media igual a suma entre la cuenta de arreglos sin espacios
    const conDecimal = media.toFixed(2);// se asignan 2 decimales 
    const esnumero = n => !!Number(n); //se declara constante para validar si es numero
    if (esnumero(conDecimal)) { // se valida si es un numero lo que se retornara si es entra al if
      return Number(conDecimal);
    } else { //si no es numero retorna 0
      return 0;
    }

  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const palabrasseparadas = text.split(" ");// separa el texto en palabras
    const esnumero = n => !!Number(n);
    let contarnumeros = 0; // se declara la variable contar números
    for (let i = 0; i < palabrasseparadas.length; i++) {// por medio de for hace un recorrido 
      if (esnumero(palabrasseparadas[i])) { // si el arreglo en la posicion i tiene numeros, entra en el if y lo va contando
        contarnumeros = contarnumeros + 1;
      }
    }
    return contarnumeros;
  },
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

  getNumberSum: (text) => {
    const palabrasseparadas = text.split(" ");// separa el texto en palabras
    const esnumero = n => !!Number(n);
    let sumanumeros = 0; // se declara la variable sumanumeros
    for (let i = 0; i < palabrasseparadas.length; i++) { // por medio de for se hace un recorrido por el arreglo
      if (esnumero(palabrasseparadas[i])) { // si el arreglo en la posición i tiene números entra en if
        sumanumeros = Number(sumanumeros) + Number(palabrasseparadas[i]);// se van sumando
      }
    }
    return sumanumeros;

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  },


};

export default analyzer;
