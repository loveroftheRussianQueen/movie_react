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
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";
import {NavigationOptions} from 'swiper/types/modules/navigation';
import 'swiper/scss';
import "swiper/scss/navigation";
import Modal, { ModalContent } from '../Modal/Modal';

const Poster = () => {

  const [isActive, setActive] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const popular = useSelector(selectPopular);
  const [modal, setModal] = useState<boolean>(false);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() =>{
        dispatch(fetchPopular(1));
  }, [])

  return (
      <div className="poster">
        <Swiper
        navigation={{ prevEl, nextEl }}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        loop={true}
        
        >
            {popular?.results.map((movie, key) =>
              <SwiperSlide key={key}>
                    {({isActive}) => (
                      <Poster_Item movie={movie} className={isActive ? 'active' : ''}/>
                    )}
              </SwiperSlide>  
            )}
        </Swiper>
        {
          popular?.results?.map((movie, key) =>
            <TrailerModal key={key} movie={movie}/>
          )
        }
      </div>
  );
};

export default Poster;

const Poster_Item = (props: any) =>{

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const movie = props.movie;

    const big_img = 'http://image.tmdb.org/t/p/w1280/';
    const small_img = 'http://image.tmdb.org/t/p/w500/';

    const setModalActive = async (props: any) =>{
      const modal = document.querySelector(`#modal_${movie.id}`);

      const videos = await fetchVideos(movie.id);

      if(videos.results.length > 0){
        const src = 'https://www.youtube.com/embed/' + videos?.results[0].key;
        modal?.querySelector('.modal__content > iframe')?.setAttribute('src', src);
      }else{
        modal?.querySelector('.modal__content > iframe')?.setAttribute('src', "");
      }

      modal?.classList.toggle('active');
    }

    return(
      <div 
            className="poster__item active"
            style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}
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
                          <Button className={"active"} onClick={() => navigate(`/movie/${movie.id}`)}>Watch now</Button>
                          <OutlineButton className={"active"} onClick={setModalActive}>Watch the trailer</OutlineButton>
                          </div>
                </div>
                <div className="poster__item__content__poster">
                    <img src={small_img + movie.backdrop_path}/>
                </div>
              </div>
              {props.children}
            </div> 
    )
}

const TrailerModal = (props: any) =>{
    const movie = props.movie;

    const iframeRef = useRef<HTMLIFrameElement>(null);

    const onClose = () => iframeRef.current?.setAttribute('src', '');

    return(
      <Modal active={false} id={`modal_${movie.id}`}>
          <ModalContent onClose={onClose}>
            <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
          </ModalContent>
      </Modal>
    )
}

