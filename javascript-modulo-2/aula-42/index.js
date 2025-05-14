function dobro(numero) {
    if (numero) {
        alert("O dobro de " + numero + " é " + (numero * 2) + "!")
    } else {
        alert("Nenhum numero foi digitado!")
    }
}

function ola(nome = "Diego") {
    alert("Olá, " + nome + "!")
}

function soma(a, b) {
    console.log(a + b)
}

function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

//dobro(120)
//ola()
//soma(1, 1)
//soma(34, 5)
criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")



