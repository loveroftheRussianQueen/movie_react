import { ISearch } from '../types/search';
import { IMovie } from '../types/movie'
import { IGenre } from '../types/genres';
import { IMovieCredits } from '../types/movie-credits';
import { IMovieDetails } from '../types/movie-details';
import { IVideo, IVideos } from '../types/videos';
import { IImages } from '../types/images';
import { IPersonDetails } from '../types/person-details';
import axios from 'axios';
import { MovieResults } from '../types/results';

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

export async function fetchPopularMovies(type:string) {
      let url: string = `${API_BASE}movie/${type}?api_key=${TMDB_API_KEY}`;
      const response = await axios.get<MovieResults>(url);
      return response;
}

export async function fetchVideos(id: number){
    let url: string = `${API_BASE}movie/${id}/videos?api_key=${TMDB_API_KEY}`;
    const response = await axios.get<IVideos>(url);
    return response;
}