function rotate(array, rounds) {
    for (let i = 0; i < rounds; i++) {
        array.push(array.shift())
    }

    console.log(array.join(' '));
}



rotate ([2, 4, 15, 31], 5)