function solve(grade) {
    console.log(formatGrade(grade))


    function formatGrade(grade) {
        if (grade < 3.00) {
            return `Fail (2)`;
        }
        
        if (grade < 3.50) {
            return `Poor (${grade.toFixed(2)})`;
        } 
        if (grade < 4.50) {
            return `Good (${grade.toFixed(2)})`; 
        } 
        if (grade < 5.50) {
            return `Very good (${grade.toFixed(2)})`; 
        } 
       
        return `Excellent (${grade.toFixed(2)})`; 
        
    }
}
solve(2.99)

