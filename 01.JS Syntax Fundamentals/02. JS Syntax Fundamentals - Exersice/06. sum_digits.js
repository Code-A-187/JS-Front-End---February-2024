/* // string solved
function strSolve(number) {
    let sum = 0;
    let str = number.toString()
    for (let i of str) {
        sum += parseInt(i)
    };

    console.log(sum);
}
*/

function mathSolve(number) {
    let sum = 0;
    while (number > 0) {

        sum += number % 10;
        number = Math.trunc (number / 10)
    }
    console.log(sum);
}


mathSolve (245678)
mathSolve (97561)
mathSolve (543)
