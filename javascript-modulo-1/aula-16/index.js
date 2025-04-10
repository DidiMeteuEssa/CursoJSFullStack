const idade = parseFloat(prompt("Digite sua idade: "))

if (idade > 18) {
    alert("Tu ja pode ser preso")
} else if (idade > 12) {
    alert("Filinho de mamãe")
} else if (idade>4) {
    alert("Crianção")
} else {
    alert("Tu é burro?")
}

idade > 18 ? alert("O ternário disse q vc já pode ser preso") : 
alert("O ternário disse q vc é filinho de mamãe")