import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCredits, selectCredits } from '../../../store/movie/credits/credits';

const CastList = () => {

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

  const {id} = useParams();
  const dispatch = useDispatch();
  const credits = useSelector(selectCredits);

  useEffect(() =>{
        dispatch(fetchCredits(Number(id)));
  },[dispatch, id])

  return (
    <div>
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
              {credits && credits.cast.map((actor, i) =>
                    <span>{actor.name}</span>
                )}
          </Carousel>
    </div>
  )
}

export default CastList;