const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    const palabrasSeparadas = text.split(" ");
    const resultadoTexto = palabrasSeparadas.length; 
    return resultadoTexto;
  },
  getCharacterCount: (text) => {
    const cantidadDeLetras = text.length;
    return cantidadDeLetras;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const resultado = text.replace(/[!.,;:"?¿)=(¡ ]/g, "");
    const resultadoSinCaracteres = resultado.length;
    return resultadoSinCaracteres;
  },
  getAverageWordLength: (text) => {
    const cantidadDePalabras = text.replace(/[^\w\s]/g, '').split(' ');
    let sumaLargos = 0;
    for (let i = 0; i < cantidadDePalabras.length; i++) {
      sumaLargos += cantidadDePalabras[i].length;
    }
    const largoPromedio = sumaLargos / cantidadDePalabras.length;
    return largoPromedio.toFixed(2);
  },
  getNumberCount: (text) => {
    const contenidoSinNumeros = text.replace(/\D/g, '');
    const numerosEnTotal = contenidoSinNumeros.length;
    if (numerosEnTotal){
    const esNumero = /^\d+(\.\d+)?$/;
    const numeros = text.match(/\d+(\.\d+)?/g);
    return total = 0;
    }
    return numerosEnTotal;
  },
  getNumberSum: (text) => {
    const regex = /(?<![a-zA-Z])\d+(?:\.\d+)?(?![a-zA-Z])(?<![a-zA-Z])/g;
    const numerosEncontrados = text.match(regex);
    if (numerosEncontrados) {
      const suma = numerosEncontrados.reduce((acumulador, numero) => acumulador + parseFloat(numero), 0);
      return suma;
    }
    return 0; 
  },
};
export default analyzer;

