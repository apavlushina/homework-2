module.exports = class ShoppingCart {
    constructor(){
        this.cart = []
    }

        getItems () {
        return this.cart;
    }

        addItem (itemName, quantity, price) {
        const item = {};
        item.name = itemName,
        item.quantity = quantity,
        item.pricePerUnit = price,
        this.cart.push(item)
        return item
    }

        clear () {
        return this.cart = []
        }

        total () {
        return this.cart.reduce((sum, curValue) => {
            return sum + curValue.pricePerUnit * curValue.quantity
        }, 0)
        }
}




