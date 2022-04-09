import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.scss';

const Movies = ({movies}: {movies: ISearch<IMovie> | null}) => {

  return (
    <div className="main">
      <div className="main__container">
      <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Upcoming movies</h2>
          </div>
          <div className="main__container__grid">
          {movies?.results.map((movie) =>
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><MovieItem movie={movie}/></Link>
          )}
          </div>
      </div>
    </div>
    
  )
}

export default Movies;

/*<div className="main">
      <div className="main__container">
      <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Upcoming movies</h2>
          </div>
          <div className="main__container__grid">
          {movies?.results.map((movie) =>
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><MovieItem movie={movie}/></Link>
          )}
          </div>
      </div>
    </div>*/