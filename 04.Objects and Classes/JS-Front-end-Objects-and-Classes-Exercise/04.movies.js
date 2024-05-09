function solve (input) {
        const movies = []
    
    for (let line of input) {
        const addMovieCommand = 'addMovie '
        const directedByCommand = ' directedBy '
        const onDateCommand = ' onDate '


        if (line.includes(addMovieCommand)) {
            const movie = {
                name: line.split(addMovieCommand)[1]
            };

            movies.push(movie);
        } else if (line.includes(directedByCommand)){
            const [movieName, director] = line.split(directedByCommand);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director
            }

        } else if (line.includes(onDateCommand)) {
            const [movieName, date] = line.split(onDateCommand);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date
            }
        }
    }
    
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

solve ([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )