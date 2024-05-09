function solve(text, searchedWord) {
    let words = text.split(' ');
    let counter = 0;

    for (let word of words) {
        if (word === searchedWord){
            counter += 1
        }
    }

    console.log(counter);
}


function count(text, searchedWord) {
    let result = text
        .split(' ')
        .filter(word => word === searchedWord)
        .length;
    
    console.log(result);
}

count ('softuni is great place for learning new programming languages',
'softuni'

)