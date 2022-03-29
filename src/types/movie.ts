import { ICompany } from "./company";
import { IGenre } from "./genres";
import { ILanguage } from "./language";

export interface IMovie {
    adult: boolean;
    budget: number;
    revenue: number;
    backdrop_path: string;
    genre_ids: Array<number>;
    genres: IGenre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    runtime: number;
    title: string;
    production_companies: ICompany[];
    status: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos:[];
  }