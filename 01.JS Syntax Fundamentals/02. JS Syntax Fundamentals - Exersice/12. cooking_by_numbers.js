function solve(strNumber, el1, el2, el3, el4, el5) {
    let result = Number(strNumber)

    let elements = el1[0] + el2[0] + el3[0] + el4[0] + el5[0]

    for (let i = 0; i< elements.length; i++) {
        switch (elements[i]) {
            case 'c':
                result /= 2;
                break;
            case 'd':
                result = Math.sqrt(result);
                break;
            case 's':
                result += 1;
                break;
            case 'b':
                result *= 3;
                break;
            case 'f':
                result -= result * 0.2;
                break;;
        }

        console.log(result)
    }

}

solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')