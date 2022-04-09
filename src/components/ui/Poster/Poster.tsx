import React, { useEffect, useRef, useState } from 'react';

import { IMovie } from '../../../types/movie';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Poster.scss';
import { Button, OutlineButton } from '../Button/Button';
//import { TrailerModal } from '../Modal/Modal';
import { fetchPopularMovies, fetchVideos } from '../../../API/services';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Poster = () => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() =>{
    fetchPopularMovies('popular').then((response) =>{
      setMovies(response.data.results);
      //console.log(response.data.results);
    })
    //console.log(movies);
  }, [])

  const few_movies = movies.slice(1,7);

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  const prevSlide = () =>{
    if(currentSlide > 0 || currentSlide >= few_movies!.length - 1){
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
            >
                <div className="poster__item__content">
                    <div className="poster__item__content__info">
                          <h2 className="title">{movie.title}</h2>
                          <div className="overview">{movie.overview}</div>
                          <Rating
                              className="movie__rate"
                              defaultValue={movie.vote_average/2} 
                              precision={0.5} 
                              size="large"
                              readOnly
                              icon={<StarIcon/>}
                              emptyIcon={<StarBorderIcon/>}
                          />
                          <div className="btns">
                          <Button className={"active"} onClick={() => console.log('fuck')}>Watch now</Button>
                          <OutlineButton className={"active"} onClick={() => setModalActive(true)}>Watch the trailer</OutlineButton>
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


