import moviesActions from '../actions/moviesActions';
import { GetMovie, ListMovies } from '../models/movies';
import QueryKeys from '../models/queryKeys';
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

/**
 * Hook that triggers the query to retrieve list of Movies.
 */
function useMovies() {
  const queryKey: QueryKeys = ["movies"]
  return useQuery<AxiosResponse<ListMovies>, Error>(queryKey, () => moviesActions.list());
}

/**
 * Hook that triggers the query to retrieve a specific Movie.
 * 
 * @param id the ID of the movie.
 */
function useMovie(id: number) {
  const enabled = id !== undefined
  const queryKey: QueryKeys = ["movies", { id }]
  return useQuery<AxiosResponse<GetMovie>, Error>(queryKey, () => moviesActions.get(id), { enabled });
}

const moviesStore = { useMovies, useMovie }
export default moviesStore