import React, { FC } from 'react';
import { IMovie } from '../../../types/movie';
import './MovieItem.scss';

const MovieItem = ({ movie }: { movie: IMovie }) => {

  const default_img = 'http://image.tmdb.org/t/p/w500/';
  return (
      <div className="movie">
        <img src={default_img + movie.poster_path}/>
        <span className="movie__title">{movie.title}</span>
        <span className="movie__rate"></span>
        <button>Click me senpai</button>
      </div>
  );
};

export default MovieItem;
