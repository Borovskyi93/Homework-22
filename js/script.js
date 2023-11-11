class Hamburger {
    constructor (burgerSize, burgerStuff) {
        this.burger = burgerSize;
        this.stuffing = burgerStuff;
    }

    addTopping (obj) {
        if(this.hasOwnProperty('topping')) {
            this.topping.topping += ', ' + obj.topping;
            this.topping.price += obj.price;
            this.topping.calories += obj.calories;
        } else {
            this.topping = obj;
        }
    }

    calculateCalories () {
        let sumCalories = 0;
        if (this.hasOwnProperty('topping')) {
            sumCalories = this.burger.calories + this.stuffing.calories + this.topping.calories;
        } else {
            sumCalories = this.burger.calories + this.stuffing.calories;
        }
        console.log('Кількість калорій у бургері:', sumCalories);
    }

    calculatePrice () {
        let sumPrice = 0;
        if (this.hasOwnProperty('topping')) {
            sumPrice = this.burger.price + this.stuffing.price + this.topping.price;
        } else {
            sumPrice = this.burger.price + this.stuffing.price;
        }
        console.log('Ціна бургера виходить:', sumPrice);
    }

    static SIZE_SMALL = {
        size: 'Small',
        price: 50,
        calories: 20,
    }

    static SIZE_BIG = {
        size: 'Big',
        price: 100,
        calories: 40,
    }

    static STUFFING_CHEESE = {
        stuffing: 'Cheese',
        price: 10,
        calories: 20,
    }

    static STUFFING_SALAD = {
        stuffing: 'Salad',
        price: 20,
        calories: 5,
    }

    static STUFFING_POTATO = {
        stuffing: 'Potato',
        price: 15,
        calories: 10,
    }

    static TOPPING_MAYO = {
        topping: 'Mayonnaise',
        price: 20,
        calories: 5,
    }

    static TOPPING_SAUCE = {
        topping: 'Sauce',
        price: 15,
        calories: 0,
    }
}


let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.calculateCalories();
hamburger.calculatePrice();
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
hamburger.calculatePrice();
console.log(hamburger);