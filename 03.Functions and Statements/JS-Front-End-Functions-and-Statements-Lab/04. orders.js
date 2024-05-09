function orderPrice(product, count) {
    let price = getPrice(product) * count
    function getPrice(product) {
    switch (product) {
        case 'coffee':
            return 1.50
        case 'water':
            return  1.00
        case 'coke':
            return 1.40
        case 'snacks':
            return 2.00

        }
    }

    console.log(`${price.toFixed(2)}`);
}

orderPrice ("water", 5)
