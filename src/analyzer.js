const analyzer = {
  getWordCount: (text) => {
    const palabrasSeparadas = text.split(" ");
    const resultadoTexto = palabrasSeparadas.length; 
    return resultadoTexto;
  },
  getCharacterCount: (text) => {
    const cantidadDeLetras = text.length;
    return cantidadDeLetras;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const cantidadDeCaracteres = (text.replace(/\s/g,''));
    const sinEspacio = cantidadDeCaracteres.replace(/[^a-zA-Z0-9]/g,'');
    return sinEspacio.length;
  },
  getNumberCount: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let count = 0;
    numeros.forEach((Number) => {
      const parseNumber=parseFloat(Number);
      if(!isNaN (parseNumber) && isFinite(parseNumber)) {
        count++;}
    });
    return count;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let sum = 0;
    numbers.forEach((number) => {
      const parseNumber = parseFloat(number);
      if (!isNaN(parseNumber) && isFinite(parseNumber)){
        sum += parseNumber;
      }
    });
    return sum;
  },
  getAverageWordLength: (text) => {
    const cantidadDePalabras = text.split(' ');
    let sumaLargos = 0;
    for (let i = 0; i < cantidadDePalabras.length; i++) {
      sumaLargos += cantidadDePalabras[i].length;
    }
    const largoPromedio = sumaLargos / cantidadDePalabras.length;
    return Number(largoPromedio.toFixed(2));
  },
};
export default analyzer;

