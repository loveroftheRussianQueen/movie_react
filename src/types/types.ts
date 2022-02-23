import { IMovie } from "./movie";

export type MovieType = {
        vote_average: string,
        title: string,
        tagline: string,
        date: string,
        poster_path: string,
        overview: string,
    };

export type MovieResults = {
    results: IMovie[],
};


export interface MovieProps {
     show: number,
     type: string,
     movies?: IMovie[],
      };