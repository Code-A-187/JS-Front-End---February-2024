function solve(input) {
    const nPieces =  Number(input.shift())
    
    const pieces = {}

    for (let i=0; i < nPieces; i++) {
        const [pieceName, composerName, key] = input[i].split('|');
        pieces[pieceName] = {
            composerName,
            key,
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Stop') {
        const [command, pieceName, firstArg, secondArg] = commandLine.split('|');

        let composerName, key;
        switch(command) {
            case 'Add':
                composerName = firstArg
                key = secondArg
                if (!(pieceName in pieces)) {
                    pieces[pieceName] = {
                        composerName,
                        key,
                    }
                    console.log(`${pieceName} by ${composerName} in ${key} added to the collection!`);
                } else {
                    console.log(`${pieceName} is already in the collection!`)
                } 
                    break;

            case 'Remove':
                if (!(pieceName in pieces)) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
                } else {
                    delete pieces[pieceName]
                    console.log(`Successfully removed ${pieceName}!`)
                } 
                    break;
                
            case 'ChangeKey':
                key = firstArg
                if (!(pieceName in pieces)) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
                } else {
                    pieces[pieceName].key = key
                    console.log(`Changed the key of ${pieceName} to ${key}!`)
                } 
                break;
        }
        
        commandLine = input.shift();
    }

    for (pieceName in pieces) {
        console.log(`${pieceName} -> Composer: ${pieces[pieceName].composerName}, Key: ${pieces[pieceName].key}`);
    }
}

solve([
    '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
  ]
  )