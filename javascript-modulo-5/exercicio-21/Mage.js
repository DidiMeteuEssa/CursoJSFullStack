const Chacarter = require("./Character")

module.exports = class Mage extends Chacarter {
    constructor(name, hp, atk, def, mp) {
        super(name, hp, atk, def)
        this.mp = mp
    }

    attack(target) {
        target.hp -= (this.atk + this.mp) - target.def
    }

    heal(ally) {
        ally.hp += (2 * this.mp)
    } 
}