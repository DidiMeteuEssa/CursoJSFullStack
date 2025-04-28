const veiculo1 = prompt("Qual o modelo do primeiro veículo?")
const velocidade1 = parseFloat(prompt("Qual velocidade o primeiro veiculo estava? (Km/h)"))

const veiculo2 = prompt("Qual o modelo do segundo veículo?")
const velocidade2 = parseFloat(prompt("Qual velocidade o segundo veiculo estava? (Km/h)"))

if (velocidade1 === velocidade2) {
    alert(`Ambos veículos possuem velocidades iguais!`)
} else {
    const resultado = (velocidade1 > velocidade2) ? veiculo1 : veiculo2
    alert(`O veículo mas rápido é o ${resultado}`)
}

