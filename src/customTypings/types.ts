export type MovieType = {
        rate: string,
        title: string,
        tagline: string,
        date: string,
    };

export interface MovieProps {
     movies: MovieType[],
      }