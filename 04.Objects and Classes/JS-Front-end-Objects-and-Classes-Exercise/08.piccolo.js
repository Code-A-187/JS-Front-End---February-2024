function solve (input){
   const parking = {};

   for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parking[carNumber] = true
            : delete parking[carNumber]
   }
   
   Object.keys(parking)
    .sort((a, b) => a.localeCompare(b))
    .forEach(carNumber => console.log(carNumber))

}

solve (
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)