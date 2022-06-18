import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import Container from '../../components/partials/Container/Container';
import Header from '../../components/partials/Header/Header';
import Hero from '../../components/partials/Hero/Hero';
import Poster from '../../components/ui/Poster/Poster';
import { fetchPlaying, selectPlaying } from '../../store/movie/now-playing/now-playing';
import { fetchPopular, selectPopular } from '../../store/movie/popular/popular';
import { fetchTop, selectTop } from '../../store/movie/top_rated/top_rated';
import { fetchUpcoming, selectUpcoming } from '../../store/movie/upcoming/upcoming';
import './Home.scss';

const Home = () => {

  const dispatch = useDispatch();

  const popular = useSelector(selectPopular);
  const top_movies = useSelector(selectTop);
  const playing = useSelector(selectPlaying);
  const upcoming = useSelector(selectUpcoming);

  useEffect(() =>{
      dispatch(fetchPopular(1));
      dispatch(fetchTop(1));
      dispatch(fetchPlaying(1));
      dispatch(fetchUpcoming(1));
      console.log(process.env.REACT_APP_API_KEY);
  }, [])

return (
  <>
  <Header/>
  <div className="hero">
    <ErrorBoundary>
      <Poster/>
    </ErrorBoundary>
      <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2 style={{color:"#fff"}}>Now playing movies</h2>
              <Link to="/playing" className="movies_link">Explore all</Link>
            </div>
            {playing && <Container movies={playing}/>}
            {!playing && <div>Loading</div>}
          </div>
           <div className="section mb-3">
            <div className="section__header mb-2">
              <h2 style={{color:"#fff"}}>Popular movies</h2>
              <Link to="/popular" className="movies_link">Explore all</Link>
            </div>
            {popular && <Container movies={popular}/>}
            {!popular && <div>Loading</div>}
          </div>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2 style={{color:"#fff"}}>Upcoming movies</h2>
              <Link to="/upcoming" className="movies_link">Explore all</Link>
            </div>
            {upcoming && <Container movies={upcoming}/>}
            {!upcoming && <div>Loading</div>}
          </div>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2 style={{color:"#fff"}}>Top rated movies</h2>
              <Link to="/top-rated" className="movies_link">Explore all</Link>
            </div>
            {top_movies && <Container movies={top_movies}/>}
            {!top_movies && <div>Loading</div>}
          </div>
      </div>
  </div>
  </>
);
};

export default Home;