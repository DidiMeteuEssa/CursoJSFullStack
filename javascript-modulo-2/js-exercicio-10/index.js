const vagas = []

function listarVagas() {
    if (possuiVagas) {
        const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
            textoFinal += indice + ". "
            textoFinal += vaga.nome
            textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
            return textoFinal
        }, "")

        alert(vagasEmTexto)
    }
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    if (possuiVagas) {
        const indice = prompt("Informe o índice da vaga que deseja exibir:")
        if (vagaExiste(indice)) {
            const vaga = vagas[indice]

            const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

            alert(
                "Vaga nº " + indice +
                "\nNome: " + vaga.nome +
                "\nDescrição: " + vaga.descricao +
                "\nData limite: " + vaga.dataLimite +
                "\nQuantidade de candidatos: " + vaga.candidatos.length +
                "\nCandidatos inscritos:" + candidatosEmTexto
            )
        }
    }
}

function inscreverCandidato() {
    if (possuiVagas) {
        const candidato = prompt("Informe o nome do(a) candidato(a):")
        const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
        if (vagaExiste(indice)) {
            const vaga = vagas[indice]

            const confirmacao = confirm(
                "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
                "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
            )

            if (confirmacao) {
                vaga.candidatos.push(candidato)
                alert("Inscrição realizada")
            }
        }
    }
}

function excluirVaga() {
    if (possuiVagas) {
        const indice = prompt("Informe o índice da vaga que deseja excluir:")
        if (vagaExiste(i)) {
            const vaga = vagas[indice]

            const confirmacao = confirm(
                "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
                "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
            )

            if (confirmacao) {
                vagas.splice(indice, 1)
                alert("Vaga excluída.")
            }
        }
    }
}

function possuiVagas() {
    if (vagas.length > 0) {
        return true
    }
    alert("Não há vagas disponíveis!")
    return false
}

function vagaExiste(i) {
    if (vagas[i]) {
        return true
    }

    alert("Essa vaga não foi encontrada")
    return false
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}


function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }

    } while (opcao !== "6");
}

executar()

