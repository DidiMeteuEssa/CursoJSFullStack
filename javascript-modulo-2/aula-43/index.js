function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

alert(calcularMedia(4.8, 7.2))

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }

    return produto
}

const CaixaSom = criarProduto("Trust GTX 629", 1200)

console.log(CaixaSom)

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(4, 9))
console.log(areaQuadrada(4))

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))