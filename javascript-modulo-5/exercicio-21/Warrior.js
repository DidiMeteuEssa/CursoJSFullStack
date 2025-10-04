const Chacarter = require("./Character")

module.exports = class Warrior extends Chacarter {
    constructor(name, hp, atk, def, sp, pos) {
        super(name, hp, atk, def)
        this.sp = sp
        this.pos = 'attack'
    }

    attack(target) {
        if(this.pos === 'attack') {
            super.attack(target)
        }
    }

    changePos() {
        if(this.pos === 'attack') {
            this.pos = 'defense'
            this.def += this.sp
        } else {
            this.pos = 'attack'
            this.def -= this.sp
        }
    }
}