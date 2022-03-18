import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../../components/partials/Header/Header';
import CastList from '../../components/ui/CastList/CastList';
import { fetchDetail, selectDetail } from '../../store/movie/movie-detail/movie-detail';
import './movie.scss';

const Movie = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectDetail);

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  useEffect(() =>{
        dispatch(fetchDetail(Number(id)));
        console.log(movie);
  }, [])
  
  return (
    <div>
      <Header/>
        {
          movie && (
            <div className="hero">
            <div className="banner" 
              style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}>
                  <div className="mb-3 movie-content container">
                      <div className="movie-content__poster">
                              <div className="movie-content__poster__img"
                              style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}></div>
                      </div>
                      <div className="movie-content__info">
                            <h1 className="title">
                                  {movie.title}
                            </h1>
                            <div className="genres">
                                    {movie.genres && movie.genres.slice(0, 5).map((genre, i) =>
                                          <span key={i} className="genres__item">{genre.name}</span>  
                                      )}
                            </div>
                            <div className="cast">
                              <div className="section__header">
                                    <h2>Cast</h2>
                              </div>
                              <CastList/>
                            </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Movie;