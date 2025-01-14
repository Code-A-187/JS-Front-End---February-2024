function solve(input) {
    const trackedWords = input
                        .shift()
                        .split(' ')
                        .reduce((result, words) => {
                            result[words] = 0
                            return result;
                        }, {});

    for (const word of input) {

        if (trackedWords.hasOwnProperty(word)) {
            trackedWords[word] += 1;
        }
    }

    Object.entries(trackedWords)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`))


}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )