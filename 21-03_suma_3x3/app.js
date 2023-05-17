const button = document.getElementById("sumar");
const resultado = document.getElementById("resultado");

button.addEventListener("click", () => {
  // Obtener los valores de los campos del formulario
  const a11 = parseInt(document.getElementsByName("a11")[0].value);
  const a12 = parseInt(document.getElementsByName("a12")[0].value);
  const a13 = parseInt(document.getElementsByName("a13")[0].value);
  const a21 = parseInt(document.getElementsByName("a21")[0].value);
  const a22 = parseInt(document.getElementsByName("a22")[0].value);
  const a23 = parseInt(document.getElementsByName("a23")[0].value);
  const a31 = parseInt(document.getElementsByName("a31")[0].value);
  const a32 = parseInt(document.getElementsByName("a32")[0].value);
  const a33 = parseInt(document.getElementsByName("a33")[0].value);
  const b11 = parseInt(document.getElementsByName("b11")[0].value);
  const b12 = parseInt(document.getElementsByName("b12")[0].value);
  const b13 = parseInt(document.getElementsByName("b13")[0].value);
  const b21 = parseInt(document.getElementsByName("b21")[0].value);
  const b22 = parseInt(document.getElementsByName("b22")[0].value);
  const b23 = parseInt(document.getElementsByName("b23")[0].value);
  const b31 = parseInt(document.getElementsByName("b31")[0].value);
  const b32 = parseInt(document.getElementsByName("b32")[0].value);
  const b33 = parseInt(document.getElementsByName("b33")[0].value);

  // Crear las matrices a partir de los valores ingresados
const matriz1 = [[a11, a12, a13], [a21, a22, a23], [a31, a32, a33]];
const matriz2 = [[b11, b12, b13], [b21, b22, b23], [b31, b32, b33]];

// Verificar si las matrices se pueden sumar
const puedenSumarse = verificarSumaMatrices(matriz1, matriz2);

if (puedenSumarse) {
// Sumar las matrices y mostrar el resultado en el área de texto
const matrizSuma = sumarMatrices(matriz1, matriz2);
resultado.value = matrizSuma.toString();
} else {
resultado.value = "No se pueden sumar las matrices";
}
});

function verificarSumaMatrices(matriz1, matriz2) {
// Verificar si las matrices tienen la misma dimensión
const filasMatriz1 = matriz1.length;
const columnasMatriz1 = matriz1[0].length;
const filasMatriz2 = matriz2.length;
const columnasMatriz2 = matriz2[0].length;

if (filasMatriz1 !== filasMatriz2 || columnasMatriz1 !== columnasMatriz2) {
return false;
}

return true;
}

function sumarMatrices(matriz1, matriz2) {
const filas = matriz1.length;
const columnas = matriz1[0].length;
const matrizSuma = [];

// Crear la matriz resultante y sumar los valores
for (let i = 0; i < filas; i++) {
matrizSuma[i] = [];
for (let j = 0; j < columnas; j++) {
matrizSuma[i][j] = matriz1[i][j] + matriz2[i][j];
}
}

return matrizSuma;
}