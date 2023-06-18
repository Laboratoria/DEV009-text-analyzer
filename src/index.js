import analyzer from './analyzer.js';
const textarea = document.querySelector("textarea[name='user-input']");
textarea.addEventListener("keyup", function () {
  const text = textarea.value;
  const contarCaracteres = analyzer.getCharacterCount(text);
  document.getElementById("contarCaracteres").innerHTML = contarCaracteres;
  const sinCaracteres = analyzer.getCharacterCountExcludingSpaces(text);
  document.getElementById("sinCaracteres").innerHTML = sinCaracteres;
  const contarPalabras = analyzer.getWordCount(text);
  document.getElementById("contarPalabras").innerHTML = contarPalabras;
  const contarNumeros = analyzer.getNumberCount(text);
  document.getElementById("contarNumeros").innerHTML = contarNumeros;
  const sumaNumeros = analyzer.getNumberSum(text);
  document.getElementById("sumaNumeros").innerHTML = sumaNumeros;
  const longitudPromedio = analyzer.getAverageWordLength(text);
  document.getElementById("longitudPromedio").innerHTML = longitudPromedio;
})
const button = document.getElementById("reset-button");
button.addEventListener("click", function () {
  textarea.value = '';
  document.getElementById("contarCaracteres").innerHTML = '';
  document.getElementById("sinCaracteres").innerHTML = '';
  document.getElementById("contarPalabras").innerHTML = '';
  document.getElementById("contarNumeros").innerHTML = '';
  document.getElementById("sumaNumeros").innerHTML = '';
  document.getElementById("longitudPromedio").innerHTML = '';
});
