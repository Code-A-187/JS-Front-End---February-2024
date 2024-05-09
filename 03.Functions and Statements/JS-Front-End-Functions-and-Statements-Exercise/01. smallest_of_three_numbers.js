function solve(intOne, intTwo, intThree) {

    function smallest(intOne, intTwo, intThree) {
        if (intOne < intTwo && intOne < intThree){
            return intOne
        } 
        if ( intTwo < intOne && intTwo < intThree){
            return intTwo
        }   
        return intThree
    }

    console.log(smallest(intOne, intTwo, intThree));
}

solve (2,
    2,
    2
    )