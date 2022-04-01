import Carousel from 'react-multi-carousel';
import { MovieProps } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './Container.scss';
import { Link, useNavigate } from "react-router-dom";
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/results';

const Container = ({movies}: {movies:MovieResults | null}) => {

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`movie/${id}`);
  }
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

  const few_movies = movies?.results.slice(1,10);

return (
    <div className="carousel-container">
      {movies ?
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
          {movies?.results?.map((movie) =>
            <Link to={`/movie/${movie.id}`} replace style={{ textDecoration: 'none' }}><MovieItem movie={movie} key={movie.id}/></Link>
          )}
      </Carousel>
      :
      <div>Loading...</div>
      }
          
    </div>
  )
}  
export default Container;