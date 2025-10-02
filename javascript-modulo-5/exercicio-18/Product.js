class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity;
    }

    calculateDiscount(discount) {
        return parseFloat(this.price - (this.price * (discount / 100)))
    }
}

const mousepad = new Product('Mousepad', 'Mousepad Lightspeed', 80)
console.log(mousepad)

mousepad.addToStock(3)

console.log(mousepad)

console.log(mousepad.calculateDiscount(15))