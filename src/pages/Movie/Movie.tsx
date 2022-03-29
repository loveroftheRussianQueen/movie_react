import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../../components/partials/Header/Header';
import CastList from './CastList';
import { fetchDetail, selectDetail } from '../../store/movie/movie-detail/movie-detail';
import './movie.scss';
import './tabs.scss';
import { fetchCredits, selectCredits } from '../../store/movie/credits/credits';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MovieTable from '../../components/ui/MovieTable/MovieTable';

const Movie = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectDetail);
  const credits = useSelector(selectCredits);

  const big_img = 'http://image.tmdb.org/t/p/w1280/';
  const small_img = 'http://image.tmdb.org/t/p/w500/';

  useEffect(() =>{
        dispatch(fetchDetail(Number(id)));
        dispatch(fetchCredits(Number(id)));
        console.log(movie);
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
      <div className="casts">
          <div className="section__header">
                <h2>Cast</h2>
          </div>
          <CastList credits={credits}/>
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
         <p>Tab 2 works!</p>
       </TabPanel>
       <TabPanel>
         <p>Tab 3 works!</p>
       </TabPanel>
     </Tabs>
    </div>
          )
        }
    </div>
  )
}

export default Movie;