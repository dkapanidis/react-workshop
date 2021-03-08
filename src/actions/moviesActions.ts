import axios from 'axios';
import { GetMovie, ListMovies, Movie } from '../models/movies';

async function create(movie: Movie) {
  return await axios.post<Movie>('/api/movies', movie);
}

async function list() {
  return await axios.get<ListMovies>('/api/movies');
}

async function get(id: number) {
  return await axios.get<GetMovie>(`/api/movies/${id}`);
}

async function update(id: number, movie: Movie) {
  return await axios.put<GetMovie>(`/api/movies/${id}`, movie);
}

async function remove(id: number) {
  return await axios.delete(`/api/movies/${id}`);
}

const moviesActions = { create, list, get, update, remove }
export default moviesActions