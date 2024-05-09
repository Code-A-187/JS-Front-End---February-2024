function solve(numsArray) {

    numsArray.forEach(printPalindromeResult)

    function isPalindrome (number) {
        const forwardNumber = number.toString()
        const reversedNumber = forwardNumber
                    .split('')
                    .reverse()
                    .join('');
        
        return  forwardNumber === reversedNumber
    }
    
    function printPalindromeResult(number){
        console.log(isPalindrome(number))

    }
}

solve ([32,2,232,1010])