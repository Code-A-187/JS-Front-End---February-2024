function solve (fruit, weightInGrams, price) {
    const weight = weightInGrams / 1000;
    const totalPrice = price * weight
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)