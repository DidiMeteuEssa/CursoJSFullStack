const Chacarter = require("./Character")

module.exports = class Thief extends Chacarter {
    constructor(name, hp, atk, def) {
        super(name, hp, atk, def)
    }

    attack(target) {
        target.hp -= 2 * (this.atk - target.def)
    }
}