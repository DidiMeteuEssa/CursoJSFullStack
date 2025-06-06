function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text

    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder

    return input
}

const newTechBtn = document.getElementById('new-tech')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

newTechBtn.addEventListener('click', function(ev) {
    const stackInputs = document.getElementById('stack-inputs')
    
    const newRow = document.createElement('li')
    const rowIndex = inputRows

    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel('Experiência: ')

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 Anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 Anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ Anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(ev) {
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, 
        techNameInput, 
        document.createElement('br'),
        document.createElement('br'),
        expLabel, 
        document.createElement('br'),
        expRadio1,
        expLabel1, 
        document.createElement('br'),
        expRadio2, 
        expLabel2, 
        document.createElement('br'),
        expRadio3, 
        expLabel3,
        document.createElement('br'),
        document.createElement('br'),
        removeRowBtn,
        document.createElement('br'),
        document.createElement('br'),
    )
    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const fullnameInput = document.getElementById('name')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function(row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)

    fullnameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})

