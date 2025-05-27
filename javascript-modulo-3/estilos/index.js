const lightBtn = document.getElementById('lightBtn')
const darkBtn = document.getElementById('darkBtn')
const switchBtn = document.getElementById('switchBtn')

lightBtn.addEventListener('click', useLightTheme)
darkBtn.addEventListener('click', useDarkTheme)
switchBtn.addEventListener('click', switchTheme)


function useDarkTheme() {
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#f1f5f9'
}

function useLightTheme() {
    document.body.style.backgroundColor = '#f1f5f9'
    document.body.style.color = '#212529'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}