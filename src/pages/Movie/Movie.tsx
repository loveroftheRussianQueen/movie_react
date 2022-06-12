import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom'
import Header from '../../components/partials/Header/Header';
import CastList from '../../components/ui/CastList/CastList';
import { fetchDetail, selectDetail } from '../../store/movie/movie-detail/movie-detail';
import './movie.scss';
import './tabs.scss';
import { fetchCredits, selectCredits } from '../../store/movie/credits/credits';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MovieTable from '../../components/ui/MovieTable/MovieTable';
import Videos from '../../components/ui/Videos/Videos';
import { selectVideos } from '../../store/movie/movie-videos/movie-videos';
import { fetchVideos } from '../../API/services';
import Photos from '../../components/ui/Photos/Photos';
import { fetchPhotos, selectPhotos } from '../../store/movie/photos/photos';
import { fetchRecommended, selectRecommended } from '../../store/movie/recommended/recommended';
import Container from '../../components/partials/Container/Container';
import { fetchSimilar, selectSimilar } from '../../store/movie/similar/similar';

const Movie = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectDetail);
  const credits = useSelector(selectCredits);
  const photos = useSelector(selectPhotos);
  const videos = useSelector(selectVideos);
  const recommended = useSelector(selectRecommended);
  const similar = useSelector(selectSimilar);

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  const location = useLocation();

  useEffect(() =>{
      window.scrollTo(0, 0);
  }, [location])

  useEffect(() =>{
        dispatch(fetchDetail(Number(id)));
        dispatch(fetchCredits(Number(id)));
        dispatch(fetchPhotos(Number(id)));
        dispatch(fetchRecommended(Number(id)));
        dispatch(fetchSimilar(Number(id)));
  }, [dispatch, id])
  
  return (
    <div>
      <Header/>
{
  movie && (
    <div className="hero">
    <div className="banner" 
      style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}>
          <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                      <div className="movie-content__poster__img"
                      style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}></div>
              </div>
              <div className="movie-content__info">
                    <h1 className="title">
                          {movie.title}
                    </h1>
                    <div className="genres">
                            {movie.genres && movie.genres.slice(0, 5).map((genre, i) =>
                                  <span key={i} className="genres__item">{genre.name}</span>  
                              )}
                    </div>
              </div>
          </div>
      </div>
        <Tabs className="Tabs">
       <TabList>
         <Tab>OVERVIEW</Tab>
         <Tab>VIDEOS</Tab>
         <Tab>PHOTOS</Tab>
       </TabList>
      <TabPanel>
         <div className="poster__img"
         style={{backgroundImage: `url(${big_img + movie.backdrop_path})`}}>
         </div>
         <div className="info">
                    <h1 className="title">{movie.title}</h1> 
                    <p className="overview">{movie.overview}</p>
                    <MovieTable movie={movie}/>
            </div>
       </TabPanel>
       <TabPanel>
              
       </TabPanel>
       <TabPanel>
         <Photos photos={photos}/>
       </TabPanel>
     </Tabs>
     <div className="casts">
          <div className="section__header">
                <h2>Cast</h2>
          </div>
          <CastList credits={credits}/>
      </div>
      <div className="casts">
          <div className="section__header">
                <h2>Recommended movies</h2>
          </div>
          <Container movies={recommended}/>
      </div>
      <div className="casts">
          <div className="section__header">
                <h2>Similar movies</h2>
          </div>
          <Container movies={similar}/>
      </div>
    </div>
          )
        }
    </div>
  )
}

export default Movie;