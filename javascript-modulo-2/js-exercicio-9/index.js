let opc = -1
let resultado = 0

do {
    opc = menu()

    switch (opc) {
        case 1:
            resultado = calcularTriangulo(parseInt(prompt("Digite a base do triângulo:")), parseInt(prompt("Digite a altura do triângulo:")))
            alert("A área do triângulo é " + resultado)
            break;
        case 2:
            resultado = calcularRetangulo(parseInt(prompt("Digite a base do retângulo:")), parseInt(prompt("Digite a altura do retângulo:")))
            alert("A área do retângulo é " + resultado)
            break;
        case 3:
            resultado = calcularQuadrado(parseInt(prompt("Digite o lado do quadrado:")))
            alert("A área do quadrado é " + resultado)
            break;
        case 4:
            resultado = calcularTrapezio(parseInt(prompt("Digite a base maior do trapézio:")), parseInt(prompt("Digite a base menor do trapézio:")), parseInt(prompt("Digite a altura do trapézio:")))
            alert("A área do trapézio é " + resultado)
            break;
        case 5:
            resultado = calcularCirculo(parseInt(prompt("Digite o raio do círculo:")))
            alert("A área do círculo é " + resultado)
            break;
        case 0:
            alert("Saindo da calculadora...")
            break;
        default:
            alert("Opção inválida!")
            break
    }
} while (opc != 0)

function calcularTriangulo(base, altura) {
    return (calcularRetangulo(base, altura) / 2)
}

function calcularRetangulo(base, altura) {
    return (base * altura)
}

function calcularQuadrado(lado) {
    return calcularRetangulo(lado, lado)
}

function calcularTrapezio(baseMaior, baseMenor, altura) {
    return (calcularRetangulo((baseMaior + baseMenor), altura) / 2)
}

function calcularCirculo(raio) {
    return (3.14 * (raio*raio))
}

function menu() {
    return parseInt(prompt(
        "Bem-vindo à calculadora geométrica!\n" +
        "\nEscolha o cálculo a ser realizado:\n" +
        "\n1. Calcular área do triângulo" +
        "\n2. Calcular área do retângulo" +
        "\n3. Calcular área do quadrado" +
        "\n4. Calcular área do trapézio" +
        "\n5. Calcular área do círculo" +
        "\n0. Sair da calculadora\n" +
        "\nSua opção:"
    ))
}