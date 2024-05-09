function solve(string, count) {

    function repeatStr(a, b){
        let new_string = ''
        for (i = 0; i<b; i++) {
        new_string += a
        }
        
        return new_string
    }
    
    return(repeatStr(string, count))
}

console.log(solve("abc", 2))