import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IMovie } from '../../../types/movie';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Poster.scss';
import { Button, OutlineButton } from '../Button/Button';
//import { TrailerModal } from '../Modal/Modal';
import { fetchPopularMovies, fetchVideos } from '../../../API/services';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular, selectPopular } from '../../../store/movie/popular/popular';
import Trailer from './Trailer';
import { AiFillCloseCircle } from 'react-icons/ai';
import { selectVideos } from '../../../store/movie/movie-videos/movie-videos';

const Poster = () => {

  const [active, setActive] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const popular = useSelector(selectPopular);
  const videos = useSelector(selectVideos);
  const [modal, setModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
        dispatch(fetchPopular());
  }, [])

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  const prevSlide = () =>{
    if(currentSlide > 0 || currentSlide >= popular!.results!.length - 1){
      setCurrentSlide(currentSlide - 1);
    }
    else{
      setCurrentSlide(popular!.results!.length - 1);
    }
  }

  const nextSlide = () =>{
    if(currentSlide < popular!.results!.length - 1){
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }else{
        setCurrentSlide(0);
    }
  }

  const showTrailer = (id: number) =>{
      dispatch(fetchVideos(id));
  }

  return (
    <div className="poster">
          {popular?.results ? popular.results.map((movie, key) =>
            <div 
            className={`poster__item ${currentSlide===key ? 'active' : ''}`}
            style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}
            key={key}
            >
              <div className={modal ? "trailer active" : "trailer"}>
              <Trailer movie={movie} active={false}/>
              </div>
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
                          <Button className={"active"} onClick={() => navigate(`/movie/${movie.id}`)}>Watch now</Button>
                          <OutlineButton className={"active"} onClick={() => showTrailer(movie.id)}>Watch the trailer</OutlineButton>
                          </div>
                    </div>
                    <div className="poster__item__content__poster">
                          <img src={small_img + movie.backdrop_path}/>
                    </div>
                </div>
                <BsArrowLeft className="arrow left" onClick={() => prevSlide()}/>
                <BsArrowRight className="arrow right" onClick={() => nextSlide()}/>
            </div> 
              )
            :
            <div>Loading...</div>}
    </div>
  );
};

export default Poster;


