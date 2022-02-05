import { IPerson } from './person';
import { IMovieCredits } from './movie-credits';

export interface IPersonDetails extends IPerson {
  also_known_as: Array<string>;
  biography: Date;
  birthday: Date;
  deathday: Date;
  gender: number;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
  movie_credits?: IMovieCredits;
}