// Movie
export interface Movie {
  id: number,
  name: string,
  year: number,
  score: number,
}

// REST Response listing movies
export interface ListMovies {
  movies: Movie[],
}

// REST Response getting a movie
export interface GetMovie {
  movie: Movie,
}