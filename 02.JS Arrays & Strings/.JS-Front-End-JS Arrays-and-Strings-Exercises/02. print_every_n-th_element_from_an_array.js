function nth_Element(array, step) {
    let new_array = [];

    for (let i = 0; i < array.length; i += step) {
        new_array.push(array[i]);
        
    }

    return new_array

}


console.log(nth_Element(['5', '20', '31', '4', '20'], 2))
