let opc = 0
let pacientes = []
let pacientesString = ""

do {

    pacientesString = ""
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i]
        pacientesString += "\n" + (i + 1) + "º " + paciente
    }
    opc = parseInt(prompt("Fila de pacientes: \n-------------------" +
                        pacientesString + "\n-------------------\n" +
                        "1. Novo paciente" +
                        "\n2. Consultar paciente" +
                        "\n3. Sair" +
                        "\n\nSelecione uma opção:"))

    switch (opc) {
        case 1:
            let novoPaciente = prompt("Qual o nome do novo paciente?")
            pacientes.push(novoPaciente)
            break;
        case 2:
            let pacienteConsultado = pacientes.shift()
            if(!pacienteConsultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert("O paciente " + pacienteConsultado + " foi consultado.") 
            }
            break;
        case 3:
            alert("Resultado final da fila:"+
                "\n-------------------" + pacientesString + 
                "\n-------------------\nSaindo do programa...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
} while (opc != 3)
