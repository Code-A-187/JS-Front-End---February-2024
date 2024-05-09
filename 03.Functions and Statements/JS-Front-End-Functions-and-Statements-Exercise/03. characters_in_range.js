function range(charOne, charTwo) {
    let start = 0
    let end = 0
    charArray = []

    if (charOne < charTwo) {
        start = charOne.charCodeAt()
        end = charTwo.charCodeAt()
    } 
    else {
        start = charTwo.charCodeAt()
        end = charOne.charCodeAt()
    }

    
    for (i = start +1; i<end; i++){
        charArray.push(String.fromCharCode(i)) 
    }

    console.log(charArray.join(' '))

}

range('C',
'#'

)