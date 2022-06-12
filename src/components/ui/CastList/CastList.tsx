import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import './CastList.scss';
import "react-multi-carousel/lib/styles.css";
import { IMovieCredits } from '../../../types/movie-credits';

import person from '../../../assets/person.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Pagination, Navigation, EffectFade } from "swiper";
import {NavigationOptions} from 'swiper/types/modules/navigation';
import 'swiper/scss';
import "swiper/scss/navigation";
import "swiper/css/effect-fade";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CastList = ({credits}: {credits: IMovieCredits | null}) => {

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

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

    SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const default_img = 'http://image.tmdb.org/t/p/w500/';

  return (
    <>
      { credits ? 
        <Swiper
        navigation={{ prevEl, nextEl }}
        rewind={true}
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation]}
        >
              {credits?.cast?.map((actor, i)=>
              <SwiperSlide>
                <div className="casts__item" key={i}>
                      <img src={actor.profile_path ? default_img + actor.profile_path : person}/>
                      <span className="actor_name">{actor.name}</span>
                      <span className="character_name">{actor.character}</span>
                  </div>
              </SwiperSlide>
              )}
          <div ref={(node) => setPrevEl(node)} className="nav prev"><ArrowBackIosIcon className="icon"/></div>
                    <div ref={(node) => setNextEl(node)} className="nav next"><ArrowForwardIosIcon className="icon"/></div>
                </Swiper>
          :
          <div>Loading...</div>
      }
    </>
  )
}

export default CastList;