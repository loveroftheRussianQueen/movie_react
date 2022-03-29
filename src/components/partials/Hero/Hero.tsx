import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaying, selectPlaying } from '../../../store/movie/now-playing/now-playing';
import { fetchPopular, selectPopular } from '../../../store/movie/popular/popular';
import { fetchTop, selectTop } from '../../../store/movie/top_rated/top_rated';
import { fetchUpcoming, selectUpcoming } from '../../../store/movie/upcoming/upcoming';
import { RootState } from '../../../store/store';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Poster from '../../ui/Poster/Poster';
import './Hero.scss';

const Hero = () => {

    const dispatch = useDispatch();
    const postStatus = useSelector((state:RootState) => state.popular.status);
  
    const popular = useSelector(selectPopular);
    const top_movies = useSelector(selectTop);
    const playing = useSelector(selectPlaying);
    const upcoming = useSelector(selectUpcoming);

    useEffect(() =>{
      if (postStatus === 'idle') {
        dispatch(fetchPopular());
        dispatch(fetchTop());
        dispatch(fetchPlaying());
        dispatch(fetchUpcoming());
      }
      console.log(playing);
    }, [postStatus, dispatch])

  return (
    <div className="hero">
        <Poster/>
        <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Now playing movies</h2>
              </div>
              <Container movies={playing}/>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Popular movies</h2>
              </div>
              <Container movies={popular}/>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Upcoming movies</h2>
              </div>
              <Container movies={upcoming}/>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Top rated movies</h2>
              </div>
              <Container movies={top_movies}/>
            </div>
        </div>
    </div>
  );
};

export default Hero;
