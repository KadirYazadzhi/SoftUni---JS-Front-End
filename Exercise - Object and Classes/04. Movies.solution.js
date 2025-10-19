function solveSolution(input) {
    const movies = [];

    for (const line of input) {
        if (line.startsWith("addMovie")) {
            const name = line.substring("addMovie ".length);
            movies.push({ name });
        } else if (line.includes("directedBy")) {
            const [movieName, director] = line.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            const [movieName, date] = line.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

// Example usage:
// solveSolution([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Superman directedBy Zack Snyder',
//     'Superman onDate 18.09.2010'
// ]);
// Output:
// {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
// {"name":"Superman","director":"Zack Snyder","date":"18.09.2010"}
