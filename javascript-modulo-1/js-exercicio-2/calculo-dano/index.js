const attackCharacter = prompt("Qual o nome do personagem atacante?")
const damagePower = parseFloat(prompt("Qual o poder de dano desse personagem?"))

const defenseCharacter = prompt("Qual o nome do personagem defensor?")
let healthPoints = parseFloat(prompt("Quantos HPs esse personagem tem?"))
const defensePower = parseFloat(prompt("Qual o poder de defesa desse personagem?"))
const hasShield = confirm("O personagem defensor possui escudo?")

let damageCaused = 0

if(damagePower > defensePower) {
    damageCaused = damagePower - defensePower
    if(hasShield=="S") {
        damageCaused /= 2
    }
} 

alert(`${attackCharacter} causou ${damageCaused} de ano em ${defenseCharacter}`)

healthPoints -= damageCaused

alert(`
Personagem atacante: ${attackCharacter}
\nPontos de ataque: ${damagePower}
\n\nPersonagem defensor: ${defenseCharacter}
\nPontos de vida: ${healthPoints}
\nPontos de defesa: ${defensePower}
\nPossui escudo: ${hasShield}`)


