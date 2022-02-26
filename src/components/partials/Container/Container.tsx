import React, { TouchEventHandler, useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Swiper from 'react-id-swiper';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import { MovieProps } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Container.scss';

const Container = ({movies}:MovieProps) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    }
  };

  const few_movies = movies.slice(1,10);
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [movies, setMovies] = useState<IMovie[]>([]);

return (
    <div className="carousel-container">
          <Carousel
          swipeable={true}
          draggable={false}
          //showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          //infinite={true}
         // autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          //itemClass="carousel-item-padding-40-px"
          >
              {movies.map((movie) =>
                  <MovieItem movie={movie}/>
              )}
          </Carousel>
    </div>
  )
}  
export default Container;


/*

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
                  currentIndex < (length - show) &&
                  <BsArrowRight className="right-arrow" onClick={() => next()}/>
                }
            </div>*/
