
/*
function subtract(a, b, c) {
    let result = sum(a, b) - c
    
    function sum(a, b) {
        return a + b
    }

    console.log(result);

}
*/


function solve (first, second, third) {
    const sum = (a, b) => a + b;
    const subtract = (a,b) => a - b;

    const result = subtract(sum(first, second), third);

    console.log(result);
}




solve(42,
    58,
    100
    )