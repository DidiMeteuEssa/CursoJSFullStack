const resultInput = document.getElementById('result')
const playerRound = document.getElementById('player')
const sort = document.getElementById('sort')
const reset = document.getElementById('reset')
const header = document.querySelector('header')
const root = document.querySelector(':root')
const chars = ['X', 'O'];

let round = chars[Math.floor(Math.random() * chars.length)];

sort.addEventListener('click', function () {

    sort.style.display = 'none'
    header.style.display = 'flex'

    if (round === 'X') {
        playerRound.innerText = 'Jogador 1'
        playerRound.classList.add('player1')
    } else {
        playerRound.innerText = 'Jogador 2'
        playerRound.classList.add('player2')
    }
    document.querySelectorAll('.placement').forEach(function (disableBtn) {
        disableBtn.disabled = false
    })
})

reset.addEventListener('click', function () {
    location.reload();
})

let player1Positions = []
let player2Positions = []
let roundCount = 0

document.querySelectorAll('.placement').forEach(function (placementBtn) {
    placementBtn.addEventListener('click', function () {
        const placement = placementBtn.dataset.placement
        placementBtn.innerText = round
        placementBtn.disabled = true
        if (round === 'X') {
            player1Positions.push(placement)
            round = 'O'
            placementBtn.classList.remove('player2')
            placementBtn.classList.add('player1')

            playerRound.innerText = 'Jogador 2'

            playerRound.classList.remove('player1')
            playerRound.classList.add('player2')
        } else {
            player2Positions.push(placement)
            round = 'X'
            placementBtn.classList.remove('player1')
            placementBtn.classList.add('player2')

            playerRound.innerText = 'Jogador 1'

            playerRound.classList.remove('player2')
            playerRound.classList.add('player1')
        }

        roundCount++

        if (roundCount == 9) {
            playerRound.classList.remove('player1')
            playerRound.classList.remove('player2')
            resultInput.classList.add('draw')

            playerRound.innerText = 'GAME OVER!'
            resultInput.value = 'EMPATE!'

            reset.style.display = 'block'
        }

        if (roundCount >= 5) {
            let winner = checkResults()
            if (winner === 'player1') {
                resultInput.classList.add('player1')
                resultInput.classList.remove('draw')
                playerRound.classList.add('player1')
                playerRound.classList.remove('player2')

                resultInput.value = "JOGADOR 1 VENCE!"
            }

            if (winner === 'player2') {
                resultInput.classList.add('player2')
                resultInput.classList.remove('draw')
                playerRound.classList.add('player2')
                playerRound.classList.remove('player1')

                resultInput.value = "JOGADOR 2 VENCE!"
            }

            if (winner) {
                document.querySelectorAll('.placement').forEach(function (disableBtn) {
                    disableBtn.disabled = true
                    playerRound.innerText = 'GAME OVER!'
                    reset.style.display = 'block'
                })
            }
        }
    })
})

function checkResults() {
    for (let i = 0; i < player1Positions.length; i++) {
        if (player1Positions.includes('1') && player1Positions.includes('2') && player1Positions.includes('3')) {
            colorWin(1, 2, 3)
            return 'player1'
        }

        if (player1Positions.includes('4') && player1Positions.includes('5') && player1Positions.includes('6')) {
            colorWin(4, 5, 6)
            return 'player1'
        }

        if (player1Positions.includes('7') && player1Positions.includes('8') && player1Positions.includes('9')) {
            colorWin(7, 8, 9)
            return 'player1'
        }

        if (player1Positions.includes('1') && player1Positions.includes('4') && player1Positions.includes('7')) {
            colorWin(1, 4, 7)
            return 'player1'
        }

        if (player1Positions.includes('2') && player1Positions.includes('5') && player1Positions.includes('8')) {
            colorWin(2, 5, 8)
            return 'player1'
        }

        if (player1Positions.includes('3') && player1Positions.includes('6') && player1Positions.includes('9')) {
            colorWin(3, 6, 9)
            return 'player1'
        }

        if (player1Positions.includes('1') && player1Positions.includes('5') && player1Positions.includes('9')) {
            colorWin(1, 5, 9)
            return 'player1'
        }

        if (player1Positions.includes('3') && player1Positions.includes('5') && player1Positions.includes('7')) {
            colorWin(3, 5, 7)
            return 'player1'
        }
        ////

        if (player2Positions.includes('1') && player2Positions.includes('2') && player2Positions.includes('3')) {
            colorWin(1, 2, 3)
            return 'player2'
        }

        if (player2Positions.includes('4') && player2Positions.includes('5') && player2Positions.includes('6')) {
            colorWin(4, 5, 6)
            return 'player2'
        }

        if (player2Positions.includes('7') && player2Positions.includes('8') && player2Positions.includes('9')) {
            colorWin(7, 8, 9)
            return 'player2'
        }

        if (player2Positions.includes('1') && player2Positions.includes('4') && player2Positions.includes('7')) {
            colorWin(1, 4, 7)
            return 'player2'
        }

        if (player2Positions.includes('2') && player2Positions.includes('5') && player2Positions.includes('8')) {
            colorWin(2, 5, 8)
            return 'player2'
        }

        if (player2Positions.includes('3') && player2Positions.includes('6') && player2Positions.includes('9')) {
            colorWin(3, 6, 9)
            return 'player2'
        }

        if (player2Positions.includes('1') && player2Positions.includes('5') && player2Positions.includes('9')) {
            colorWin(1, 5, 9)
            return 'player2'
        }

        if (player2Positions.includes('3') && player2Positions.includes('5') && player2Positions.includes('7')) {
            colorWin(3, 5, 7)
            return 'player2'
        }

        return false
    }
}

function colorWin(pos1, pos2, pos3) {
    document.querySelector('button[data-placement="' + pos1 + '"]').style.backgroundColor = '#4d4d4d'
    document.querySelector('button[data-placement="' + pos2 + '"]').style.backgroundColor = '#4d4d4d'
    document.querySelector('button[data-placement="' + pos3 + '"]').style.backgroundColor = '#4d4d4d'
}

