let opc = -1
let imoveis = []
do {
    opc = parseInt(prompt("Bem-vindo ao Cadastro de Imóveis!\nQuantidade de imóveis cadastrados: " + imoveis.length +
        "\n\nSelecione uma opção: \n\n" +
        "1. Salvar um imóvel\n" +
        "2. Exibir imóveis salvos\n" +
        "0. Sair do programa" +
        "\n\nSua opção:"))

    switch (opc) {
        case 1:
            const imovel = {}
            imovel.nome = prompt("Digite o nome do propietário: ")
            imovel.qtdeQuartos = parseInt(prompt("Quantos quartos o imóvel tem?"))
            imovel.qtdeBanheiros = parseInt(prompt("Quantos banheiros o imóvel tem?"))
            imovel.possuiGaragem = prompt("O imóvel possui garagem? [SIM] ou [NAO]")
            const confirma = confirm(
                "\nNome do propietário: " + imovel.nome +
                "\nQuantidade de quartos no imóvel: " + imovel.qtdeQuartos +
                "\nQuantidade de banheiros no imóvel: " + imovel.qtdeBanheiros +
                "\nO imóvel possui garagem: " + imovel.possuiGaragem + "\n\n" +
                "Confirma esses dados?"
            )

            if (confirma) {
                alert("Cadastro concluído!")
                imoveis.push(imovel)
            } else {
                alert("Cadastro cancelado!")
            }

            break;
        case 2:
            let resultado = ""

            for (let i = 0; i < imoveis.length; i++) {
                resultado += "--------------------------------\n" +
                    "\nNome do propietário: " + imoveis[i].nome +
                    "\nQuantidade de quartos no imóvel: " + imoveis[i].qtdeQuartos +
                    "\nQuantidade de banheiros no imóvel: " + imoveis[i].qtdeBanheiros +
                    "\nO imóvel possui garagem: " + imoveis[i].possuiGaragem + "\n\n"
            }

            alert(resultado)
            break;
        case 0:
            alert("O programa finalizou com " + imoveis.length +
                " imóveis cadastrados.")
            break;
        default:
            alert("Opção inválida!")
            break
    }
} while (opc != 0)