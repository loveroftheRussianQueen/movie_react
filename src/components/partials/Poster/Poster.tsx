import React, { useEffect, useRef, useState } from 'react';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import { IMovie } from '../../../types/movie';
import { MovieProps } from '../../../types/types';
import  { Button, OutlineButton } from '../../ui/Button';
import './Poster.scss';


const Poster = ({ movies}: MovieProps ) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const few_movies = movies;

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';
  const current:number = 0;
  const isActive:boolean = true;

  return (
    <div className="poster">
          {few_movies.map((movie, key) =>
            <div 
            className={`poster__item ${isActive ? 'active' : ''}`}
            style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}
            key={key}
            >
                <div className="poster__item__content container">
                    <div className="poster__item__content__info">
                          <h2 className="title">{movie.title}</h2>
                          <div className="overview">{movie.overview}</div>
                          <div className="btns">
                          <Button className={"active"} onClick={() => console.log('fuck')}>Fuck now</Button>
                          <OutlineButton className={"active"} onClick={() => console.log('fuck')}>Fuck now</OutlineButton>
                          </div>
                    </div>
                    <div className="poster__item__content__poster">
                          <img src={small_img + movie.backdrop_path}/>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Poster;


