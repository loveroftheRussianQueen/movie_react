import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ICast } from '../../../types/cast';
import { IMovie } from '../../../types/movie';
import MovieItem from '../../partials/MovieItem/MovieItem';

interface IMovieCarousel{
    link?: string;
    items: IMovie[];
    cast?: never;
  }
  
  interface IPersonCarousel{
    cast: ICast[];
    link?: never;
    items?: never;
  }
const Carousel = () => {

  /*const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(movies.length);

  useEffect(() => {
    setLength(movies.length)
}, [movies])

const next = () => {
  if (currentIndex < (length - show!)) {
      setCurrentIndex(prevState => prevState + 1)
  }
}

const prev = () => {
  if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
  }
}

  return (
    <div className="carousel-container">
            <div className="carousel-wrapper">
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
                  currentIndex < (length - show!) &&
                  <BsArrowRight className="right-arrow" onClick={() => next()}/>
                }
            </div>
        </div>
  )*/
}

export default Carousel;