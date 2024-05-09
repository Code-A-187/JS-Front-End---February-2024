function solve(text, word) {
    let index = text.indexOf(word);

    while (index >= 0) {
        text = text.replace(word, '*'.repeat(word.length))
        index = text.indexOf(word);
    }

    console.log(text);
}


// Не работи в Judje
/*function solve(text, word) {

    let censored = text.replace(word, '*'.repeat(word.length));

    console.log(censored)

}*/

// Не работи в Judje
/*function solve(text, word) {

    let censored = text.replaceAll(word, '*'.repeat(word.length));

    console.log(censored)

}*/

solve('A small sentence with some words', 'small')