// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const myPet1 = {
//     name: "Hondo",
//     species: "Mutt",
//     nicknames: ["Hondo Man", "Sassy Pants", "Donnie"],
//     age: 12
// }

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: "crispy",
    fries: true,
    drinkSize: "Large"
}

const burgerComboMeal = {
    sandwichType: "double",
    fries: false,
    drinkSize: "Medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);

// Invoke the function to return the list of all orders
console.log(restaurant.orders);
// Output all orders to the console using console.table()
console.table(restaurant.orders);