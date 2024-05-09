/*
function separator(number) {
    let sumEven = 0
    let sumOdd = 0
    for (let n of number.toString()) {
        if (Number(n) % 2 == 0){
            sumEven +=Number(n)
        } else {
            sumOdd +=Number(n)
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
    
}
*/



function solve(number) {

    const evenSum = digitSum(number, x => x % 2 === 0)
    const oddSum = digitSum(number, x => x % 2 !== 0)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

    function digitSum(number, filter) {
        const filteredDigits = number
            .toString()
            .split('')
            .map(Number)
            .filter(filter);
    
        const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0)
    
        return sum;
    }

}

solve (3495892137259234)