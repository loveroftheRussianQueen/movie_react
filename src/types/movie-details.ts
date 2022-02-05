import { IMovie } from './movie';
import { ICompany } from './company';
import { ICountry } from './country';
import { IGenre } from './genres';

export interface IMovieDetails extends IMovie {
  budget: number;
  genres: IGenre[];
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  status: string;
  tagline: string;
}