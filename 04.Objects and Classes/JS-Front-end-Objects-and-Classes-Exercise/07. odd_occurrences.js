function solve(input) {
    const words = input.toLowerCase().split(' ')
    const wordOccurrences = {}

    for (const word of words) {
        if (!wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word] = 0;
        }
        wordOccurrences[word]++;
    }


    const result = Object
        .entries(wordOccurrences)
        .filter(([word, count]) => count%2 !== 0)
        .map(([word]) => word)
        .join(' ')

        console.log(result)
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')