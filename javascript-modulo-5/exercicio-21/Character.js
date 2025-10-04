module.exports = class Chacarter {
    constructor(name, hp, atk, def) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    attack(target) {
        target.hp -= this.atk - target.def
    }
}