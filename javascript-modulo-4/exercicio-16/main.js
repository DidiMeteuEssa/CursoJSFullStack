const dayjs = require("dayjs")

let birthday = `{   
                    "day": "13",
                    "month": "06",
                    "year": "2005"
                }`

function showDateInfo(date) {
    jsonDate = JSON.parse(date)

    let birthday = dayjs(`${jsonDate.year}-${jsonDate.month}-${jsonDate.day}`)
    const today = dayjs()

    const actualAge = today.diff(birthday, "year")
    const nextBirthday = birthday.add(actualAge + 1, 'year')
    const amountDays = nextBirthday.diff(today, 'day') + 1

    console.log(`Idade: ${actualAge}`)
    console.log(`Proximo aniversario: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias ate completar ${actualAge + 1} anos: ${amountDays} dia(s)`)
}

console.log(showDateInfo(birthday))