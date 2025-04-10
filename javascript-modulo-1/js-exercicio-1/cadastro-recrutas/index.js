const nome = prompt("Digite seu primeiro nome: ")
const sobrenome = prompt("Digite seu sobrenome: ")
const campoEstudo = prompt("Digite seu campo de estudo: ")
const anoNascimento = parseFloat(prompt("Digite seu ano de nascimento: "))

alert(`Seu nome e sobrenome é: ${nome}  ${sobrenome}\n
\nSeu campo de estudo é: ${campoEstudo}
\nSua idade é: ${2025 - anoNascimento}`)
