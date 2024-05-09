function solve(array) {
    evenSum = 0
    oddSum = 0

    for (let i of array) {
        if (i % 2 === 0) { 
            evenSum += i 
        } else {
            oddSum += i
        }    
    }

    console.log(evenSum - oddSum)
}

solve ([2,4,6,8,10])