
import React from 'react';
import { MovieProps } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Container.scss';

const Container = ({movies}: MovieProps) => {
  return (
    <div className="container">
      {movies.map((movie) =>(
          <MovieItem movie={movie} key={movie.title}/>
      ))}
    </div>
  );
};

export default Container;
