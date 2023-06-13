const analyzer = {

  getWordCount: (text) => {
    const cantidadDePalabras=text.split(" ").length;
    return cantidadDePalabras;
  },
  getCharacterCount: (text) => {
    const cantidadDeLetras=text.length;
    return cantidadDeLetras;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const resultado=text.replace(/[!.,;:?¿)=(¡ ]/g,"");
    const resultadoSinCaracteres=resultado.length;
    return resultadoSinCaracteres;
  },
  getAverageWordLength: (text) => {
    const cantidadDePalabras = text.replace(/[^\w\s]/g, '').split(' ');
    let sumaLargos=0;
    for(let i = 0; i <cantidadDePalabras.length; i++){
      sumaLargos += cantidadDePalabras[i].length;
    }
    const largoPromedio =sumaLargos/cantidadDePalabras.length;
    return largoPromedio;
  },
  getNumberCount: (text) => {
    const contenidoSinNumeros=text.replace(/\D/g, '');
    const numerosEnTotal=contenidoSinNumeros.length;
    return numerosEnTotal;
  },
  getNumberSum: (text) => {
    let elementosNumericos=text.match(/\d+/g);
    let sumados=0;
    if(elementosNumericos){
      elementosNumericos=elementosNumericos.map(Number);
      sumados=elementosNumericos.reduce((a,b)=> a + b);
    }
    return sumados;
  },
};
export default analyzer;
