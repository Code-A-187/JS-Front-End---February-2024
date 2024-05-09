function solve(lostFightsCount,...prices) {
        let expenses = 0;

        let helmetBrokenCount = 0
        let swordBrokenCount = 0
        let shieldBrokencount = 0
   
    for (i = 1; i <= lostFightsCount; i++){
        helmetBrokenCount += 1
        swordBrokenCount += 1
        

        if (helmetBrokenCount % 2 === 0) {
            expenses += prices[0]
        }

        if (swordBrokenCount % 3 === 0) {
            expenses += prices[1]
        }

        if (i % 6 === 0) {
            shieldBrokencount +=1
            expenses += prices[2]
        }

        if (shieldBrokencount != 0 && shieldBrokencount % 2 === 0) {
                expenses += prices[3]
                shieldBrokencount = 0
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

solve(23,
    12.50,
    21.50,
    40,
    200
    )