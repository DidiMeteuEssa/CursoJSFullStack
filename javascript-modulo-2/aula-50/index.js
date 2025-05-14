function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    return operacao(a, b)
}

function somar(x, y) {
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function (x, y) {
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
    console.log(elemento)
    console.log(indice)
    console.log(array)
})
