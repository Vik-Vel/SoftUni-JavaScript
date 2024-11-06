function movies(arr) {
  //  let splitted = arr.split(', ');
  let movies = [];
  for (let i = 0; i < arr.length; i++) {
    let movie = {};
    if (arr[i].startsWith("addMovie")) {
      let tokens = arr[i].split("addMovie ");
      let nameOfAMovie = tokens[1];
      movie.name = nameOfAMovie;
      movies.push(movie);
    } 
    else if (arr[i].includes("directedBy")) {
      let tokens = arr[i].split(" directedBy ");
      let nameOfAMovie = tokens[0];
      let director = tokens[1];

      //Find movie by name
      let movie = movies.find((m) => m.name === nameOfAMovie);

      if (movie) {
        movie.director = director;
      }
    }
    else if (arr[i].includes("onDate")) {
        let tokens = arr[i].split(" onDate ");
        let nameOfAMovie = tokens[0];
        let date = tokens[1];
  
        //Find movie by name
        let movie = movies.find((m) => m.name === nameOfAMovie);
  
        if (movie) {
          movie.date = date;
        }
    }
  }

    for (let movie of movies){
        if(movie.name && movie.director && movie.date){
            let mov = JSON.stringify(movie);
            console.log(mov);
        }
    }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
