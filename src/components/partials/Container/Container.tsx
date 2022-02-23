import React, { TouchEventHandler, useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { fetchPopular } from '../../../store/movie/popular/popular';
import { IPopularMoviesState } from '../../../store/movie/popular/types';
import { RootState } from '../../../store/store';
import { IMovie } from '../../../types/movie';
import { MovieProps } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Container.scss';

const Container = (/*{show, type}: MovieProps*/) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  //const [movies, setMovies] = useState<IMovie[]>([]);

  const dispatch = useDispatch();
  const postStatus = useSelector((state:RootState) => state.popular.fetchStatus);

  const popular = useSelector((state:RootState) => state.popular.popularMovie);

  useEffect(() =>{
    if (postStatus === 'pending') {
      dispatch(fetchPopular());
    }
  }, [postStatus, dispatch])

  return (
    <div className="carousel-container">
        <Swiper>
                  
        </Swiper>
    </div>
  )
};

export default Container;

/*
/*<div className="carousel-wrapper">
              {
                currentIndex > 0 &&
                <BsArrowLeft className="left-arrow" onClick={() => prev()}/>
              } 
                <div 
                className="carousel-content-wrapper">
                    <div 
                    className={`carousel-content show-${show}`}
                    style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
                    >
                        {movies.map(movie =>
                              <MovieItem movie={movie} key={movie.title}/>
                          )}
                    </div>
                </div>
                {
                  currentIndex < (length - show) &&
                  <BsArrowRight className="right-arrow" onClick={() => next()}/>
                }
            </div>*/
