let dinheiro = parseFloat(prompt("\nQual a quantidade inicial de dinheiro que você possui?"));
let opc;
let operacao;

do {

    opc = prompt("Saldo disponível: R$" + dinheiro + ".\n\nEscolha uma opção: \n\n[A] Adicionar dinheiro\n[B] Remover dinheiro\n\n[C] Sair do programa \n\nSua opção:").toUpperCase();

    switch (opc) {
        case 'A':
            operacao = parseFloat(prompt("Saldo disponível: R$" + dinheiro + ".\n\nDigite a quantidade de dinheiro que deseja adicionar: "));
            alert("Realizando a soma: \n\nR$" + dinheiro + " + R$" + operacao + " = R$" + (dinheiro + operacao));
            dinheiro += operacao;
            break;
        case 'B':
            operacao = parseFloat(prompt("Saldo disponível: R$" + dinheiro + ".\n\nDigite a quantidade de dinheiro que deseja remover: "));
            alert("Realizando a subtração: \n\nR$" + dinheiro + " - R$" + operacao + " = R$" + (dinheiro - operacao));
            dinheiro -= operacao;
            break;
        case 'C':
            alert("Saldo final: R$" + dinheiro + ".\n\nFinalizando o programa...")
            break;
    }
} while (opc != "C");

