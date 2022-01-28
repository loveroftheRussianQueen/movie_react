import React, { FC } from 'react';
import { MovieProps, MovieType } from '../../customTypings/types';
import './MovieItem.scss';

const MovieItem = ({ movie }: { movie: MovieType }) => {
  return (
    <div>
      <div className="movie">
      <span className="movie__title">{movie.title}</span>
        <span className="movie__title">{movie.tagline}</span>
        <span className="movie__title">{movie.rate}</span>
        <span className="movie__title">{movie.date}</span>
        <button>Button</button>
  </div>
    </div>
  );
};

export default MovieItem;
