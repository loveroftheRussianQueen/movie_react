import React, { FC } from 'react';
import { MovieProps, MovieType } from '../../types/types';
import './MovieItem.scss';

const MovieItem = ({ movie }: { movie: MovieType }) => {

  const default_img = 'http://image.tmdb.org/t/p/w500/';
  return (
    <div>
      <div className="movie">
        <img src={default_img + movie.poster_path}/>
        <span className="movie__title">{movie.title}</span>
        <span className="movie__rate">{movie.vote_average}</span>
        <button>Click me senpai</button>
  </div>
    </div>
  );
};

export default MovieItem;
