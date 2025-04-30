let palavra = "";
let novaPalavra = "";

do {
    palavra = prompt("Digite uma palavra: (Para sair do programa, apenas aperte [ENTER])");
    novaPalavra = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        novaPalavra += palavra[i];
    }

    if (palavra.toUpperCase() === novaPalavra.toUpperCase() && palavra != "") {
        alert("A palavra '" + palavra + "' é um palíndromo!")
    } else if(palavra != "") {
        alert("A palavra não é um palíndromo:"
            +"\n\nPalavra digitada da esquerda para direita:'" + palavra 
            + "'\nPalavra digitada da direita para esquerda: '" + novaPalavra + "'")
    }
} while ( palavra != "")

alert("Finalizando programa...")

