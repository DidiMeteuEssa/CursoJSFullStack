function addPlayer() {

    const playerPos = document.getElementById('position')
    const playerName = document.getElementById('name')
    const playerNumber = document.getElementById('number')

    const confirmation = confirm("Confirma esses dados do jogador?")

    if (confirmation) {
        const playersList = document.getElementById('players-list')
        const playerItem = document.createElement('li')

        playerItem.id = 'player - ' + playerNumber.value
        playerItem.innerText = playerPos.value + ": " + playerName.value + " (" + playerNumber.value + ")"

        playersList.appendChild(playerItem)

        playerPos.value = ''
        playerName.value = ''
        playerNumber.value = ''
    }
}

function removePlayer() {
    const playersList = document.getElementById('players-list')

    const playerNumber = document.getElementById('rem-number')
    const playerLi = document.getElementById('player - ' + playerNumber.value)

    const confirmation = confirm("Confirma excluir esse jogador?")

    if (confirmation) {
        playersList.removeChild(playerLi)
        playerNumber.value = ''
    }

}