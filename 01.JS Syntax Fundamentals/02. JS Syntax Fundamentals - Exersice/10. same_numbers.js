function solve (number) {
    let strNumber = number.toString()
    let currentDigit = strNumber[0];
    let isSame = true;
    let sum = parseInt(currentDigit);
    for (let i = 1; i < strNumber.length; i++) {
        if (currentDigit !== strNumber[i]) {
            isSame = false;
        }

        currentDigit = strNumber[i]
        sum += parseInt(currentDigit);
    };
    console.log(isSame)
    console.log(sum);
}

solve (2222222)