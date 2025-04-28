const measurement = parseFloat(prompt("Digite uma medida em metros:"))
const measureUnit = prompt("Escolha uma unidade de medida: \n\n[A] Milímetro (mm)\n[B] Centímetro (cm)\n[C] Decímetro (dm)\n[D] Decâmetro (dam)\n[E] Hectômetro (hm)\n[F] Kilômetro01 (km)").toUpperCase()
let option
let result

switch (measureUnit) {
    case 'A':
        result = measurement * 1000
        option = "mm"
        break;
    case 'B':
        result = measurement * 100
        option = "cm"
        break;
    case 'C':
        result = measurement * 10
        option = "dm"
        break;
    case 'D':
        result = measurement * 0.1
        option = "dam"
        break;
    case 'E':
        result = measurement * 0.01
        option = "hm"
        break;
    case 'F':
        result = measurement * 0.001
        option = "km"
        break;
}

alert(`Medida ${measurement} m convertida para ${option}: ${result} ${option}`)

