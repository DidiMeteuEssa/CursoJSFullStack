let numero = parseFloat(prompt("Digite um número:"));
let resultado = "";

for(let i = 0; i <= 20; i++) {
    resultado += numero + " * " + i + " = " + (numero * i) + "\n";
}

alert("Tabuada do " + numero + ":\n" + resultado);