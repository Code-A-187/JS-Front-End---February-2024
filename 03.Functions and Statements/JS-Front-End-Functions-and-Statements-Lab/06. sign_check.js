function checker(numOne, numTwo, numThree) {
    let count = 0;
    if(numOne < 0)
        count++;
    if(numTwo < 0)
        count++;
    if(numThree < 0)
        count++;

    if(count % 2 == 1)
        console.log("Negative");
    else
        console.log("Positive");
}

checker (-5,
    1,
    1
    )