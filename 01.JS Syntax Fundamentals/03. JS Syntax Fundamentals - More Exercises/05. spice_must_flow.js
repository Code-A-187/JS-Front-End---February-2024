function solve(yield){
    let extractedSpice = 0
    let daysExtraction = 0
    end = false

    for (let i=1; i++;) {
        if (yield < 100) {
            end = true
            break
        }

        extractedSpice += yield - 26;
        daysExtraction += 1
        yield -= 10
    }

    if (extractedSpice <= 26) {
        extractedSpice = 0
    }   else {
        extractedSpice -= 26
    }

    console.log(daysExtraction)
    console.log(extractedSpice);
}

solve(450)
solve (111)