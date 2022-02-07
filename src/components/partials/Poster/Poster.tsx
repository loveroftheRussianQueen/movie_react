import React, { useEffect, useRef, useState } from 'react';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import { IMovie } from '../../../types/movie';
import { MovieProps } from '../../../types/types';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Poster.scss';
import { Button, OutlineButton } from '../../ui/Button/Button';
import { store } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';


const Poster = ({ movies}: MovieProps ) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const state = store.getState();
  const valueSelector = useSelector(store => store);

  const few_movies = movies.slice(1,7);
  const poster = useRef<HTMLHeadingElement>(null);

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  const prevSlide = () =>{
    if(currentSlide > 0 || currentSlide >= few_movies.length - 1){
      setCurrentSlide(currentSlide - 1);
    }
    else{
      setCurrentSlide(few_movies.length - 1);
    }
  }


  const nextSlide = () =>{
    if(currentSlide < few_movies.length - 1){
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }else{
        setCurrentSlide(0);
    }
  }

  return (
    <div className="poster">
          {few_movies.map((movie, key) =>
            <div 
            className={`poster__item ${currentSlide===key ? 'active' : ''}`}
            style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}
            key={key}
            ref={poster}
            >
                <div className="poster__item__content container">
                    <div className="poster__item__content__info">
                          <h2 className="title">{movie.title}</h2>
                          <div className="overview">{movie.overview}</div>
                          <div className="btns">
                          <Button className={"active"} onClick={() => console.log('fuck')}>Fuck now</Button>
                          <OutlineButton className={"active"}>Fuck now</OutlineButton>
                          </div>
                    </div>
                    <div className="poster__item__content__poster">
                          <img src={small_img + movie.backdrop_path}/>
                    </div>
                </div>
                <BsArrowLeft className="arrow left" onClick={() => prevSlide()}/>
                <BsArrowRight className="arrow right" onClick={() => nextSlide()}/>
            </div>
        )}
    </div>
  );
};

export default Poster;


