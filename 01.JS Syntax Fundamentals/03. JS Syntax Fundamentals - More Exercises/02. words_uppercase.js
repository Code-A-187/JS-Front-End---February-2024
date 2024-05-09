function solve(str) {
    let words = str.split(/[\s!,.:''_?-]/).filter(function(e){return e}).join(', ').toUpperCase()

    console.log(words)
}

solve('Hi, how are you?')