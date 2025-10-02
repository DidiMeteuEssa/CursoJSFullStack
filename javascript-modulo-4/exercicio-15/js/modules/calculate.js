export default function calculate() {
    const resultInput = document.getElementById('result')
    
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    
    if (!(result === NaN || result === Infinity)) {
        resultInput.value = result
        resultInput.classList.remove('error')
    }

    if (result === undefined) {
        resultInput.value = 0
        resultInput.classList.remove('error')
    }
}
