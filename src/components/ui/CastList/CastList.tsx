import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import './CastList.scss';
import "react-multi-carousel/lib/styles.css";
import { IMovieCredits } from '../../../types/movie-credits';

const CastList = ({credits}: {credits: IMovieCredits | null}) => {

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

  const default_img = 'http://image.tmdb.org/t/p/w500/';

  return (
    <>
      { credits ? 
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
              {credits?.cast?.map((actor, i)=>
                  <div className="casts__item" key={i}>
                      <img src={default_img + actor?.profile_path}/>
                      <span className="actor_name">{actor.name}</span>
                      <span className="character_name">{actor.character}</span>
                  </div>
              )}
          </Carousel>
          :
          <div>Loading...</div>
      }
    </>
  )
}

export default CastList;