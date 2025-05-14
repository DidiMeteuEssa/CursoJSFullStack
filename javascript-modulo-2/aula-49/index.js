function somar(a, b) {
    return a + b;
}

const operacao = somar;

console.log(operacao(1, 2));

const subtrair = function subtracao(a, b) {
    return a - b;
}

console.log(subtrair(1, 2));

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))




