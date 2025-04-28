const touristName = prompt("Qual seu nome?")
let hasTraveled = confirm("Você já viajou para alguma cidade?")
let witchCity = []
let howMuchCities = 0
while(hasTraveled) {
    witchCity[howMuchCities] = prompt("Qual cidade você viajou?")
    howMuchCities++
    hasTraveled = confirm("Já visitou uma cidade diferente dessa?")
}

alert("Nome do turista: "+ touristName + 
    "\nQuantidade de viagens realizadas: "+howMuchCities+
    "\nCidades que visitou: "+witchCity.join(", ")+".")