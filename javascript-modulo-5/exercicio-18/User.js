class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, senha) {
        if (email === this.email && this.password === senha) {
            return true
        } else {
            return false
        }
    }
}

const diego = new User('Diego Calesco', 'diegolppe@gmail.com', '12345678')

console.log(diego)

if (diego.login('diegolppe@gmail.com', '12345678')) {
    console.log('Log-in bem-sucedido!')
} else {
    console.log('Log-in com erro: Credenciais erradas!')
}


