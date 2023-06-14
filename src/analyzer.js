const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsText = text.trim().split(/\s+/);
    if (wordsText.length === 0) {
      return 0;
    }
    return wordsText.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //const space = text.replace(/\s+/gi, ' ');
    //split(' ').join("")
    //const space = text.split(' ').join("").replace(/,/g, "");//remplaza comas
    // replace(/\./g, '') remplaza puntos
    const space = text.split(' ').join("").replace(/\./g, '').replace(/,/g, "");
    return space.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let totalLength = 0;
    const wordsLength = text.trim().split(/\s+/);
    if (wordsLength.length === 0) {
      return 0;
    }
    for (let i = 0; i < wordsLength.length; i++) {
      totalLength = totalLength + wordsLength[i].length;
    }
    const average = totalLength / wordsLength.length;
    // Convertir numero a decimal y solo mostrar dos decimales
    return parseFloat(average.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const numCount= text.replace(/[^0-9]+/g, "");
    //return numCount.length;
    const numCount = text.split(' ');
    let countNumber = 0;
    for (let i = 0; i < numCount.length; i++) {
      if (numCount[i] === ' ') {
        continue;
      }

      const number = Number(numCount[i]);//convirtiendo a numero
      if (!isNaN(number)) {
        countNumber += 1;
      }
    }
    return countNumber;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    let sumaNum = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === ' ') { //espacio en blanco
        continue;
      }

      const number = Number(words[i]);//convirtiendo a numero
      if (!isNaN(number)) {
        sumaNum += number;
      }
    }
    return parseFloat(sumaNum);
  },

};

export default analyzer;
