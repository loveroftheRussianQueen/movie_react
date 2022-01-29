export type MovieType = {
        vote_average: string,
        title: string,
        tagline: string,
        date: string,
        poster_path: string,
    };

export type MovieResults = {
    results: MovieType[],
};


export interface MovieProps {
     movies: MovieType[],
      };