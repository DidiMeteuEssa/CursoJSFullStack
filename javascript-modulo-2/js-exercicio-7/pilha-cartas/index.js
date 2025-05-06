let opc = 0
let baralho = []

do {

    opc = parseInt(prompt("Quantidade de cartas no baralho: " + baralho.length + " cartas." +
        "\n\n1. Adicionar uma carta" +
        "\n2. Puxar uma carta" +
        "\n3. Sair" +
        "\n\nSelecione uma opção:"))

    switch (opc) {
        case 1:
            let carta = prompt("Qual o nome da carta sendo adicionada?")
            baralho.push(carta)
            break;
        case 2:
            if (baralho.length == 0) {
                alert("Não há cartas para puxar!")
            } else {
                alert("Você puxou a carta '" + baralho.pop() + "'.")
            }

            break;
        case 3:
            alert("Cartas restantes no baralho: " + baralho.length +
                "\n\nSaindo do programa...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
} while (opc != 3)
