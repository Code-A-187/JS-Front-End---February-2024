function solve(a, b) {
    function calculateFactorial(number){
        if (number <= 1) {
            return 1;
        }
        return number * calculateFactorial(number -1)
    }

    const result = calculateFactorial(a)  / calculateFactorial (b)

    console.log(result.toFixed(2))
}

solve(6, 2);