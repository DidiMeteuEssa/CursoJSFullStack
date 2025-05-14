function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

//dividir(2028)

function dobrar(num) {
    console.log(num)
    dobrar(num*2)
}

//dobrar(1)

function fatorial(num) {
    console.log("Numero: " + num)
    if(num > 1) {
        console.log(num + " * !" + (num-1))
        return num * fatorial(num-1)
    } else {
        return 1
    }
}

console.log(fatorial(5))