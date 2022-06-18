import { useRef, useState } from 'react';
import { MovieProps } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Container.scss';
import { Link, useNavigate } from "react-router-dom";
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/results';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Pagination, Navigation, EffectCoverflow } from "swiper";
import {NavigationOptions} from 'swiper/types/modules/navigation';
import 'swiper/scss';
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ISearch } from '../../../types/search';

const Container = ({movies}: {movies:ISearch<IMovie> | null}) => {

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

return (
    <div>
      {movies?.results ?
                <Swiper
                navigation={{ prevEl, nextEl }}
                rewind={true}
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerGroup={3}
                loop={true}
                //loopFillGroupWithBlank={true}
                modules={[Navigation]}
                autoplay={true}
                >
                    {movies.results.map((movie) =>
                    <SwiperSlide>
                      <Link to={`/movie/${movie.id}`} key={movie.id} replace style={{ textDecoration: 'none' }}>
                        <MovieItem movie={movie} key={movie.id} className="movie"/>
                        </Link>
                    </SwiperSlide>
                    )}
                    <div ref={(node) => setPrevEl(node)} className="nav prev"><ArrowBackIosIcon className="icon"/></div>
                    <div ref={(node) => setNextEl(node)} className="nav next"><ArrowForwardIosIcon className="icon"/></div>
                </Swiper>
                :
                <div>Loading...</div>
      }
    </div>
  )
}  
export default Container;