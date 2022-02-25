import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular, selectPopular } from '../../../store/movie/popular/popular';
import { fetchTop, selectTop } from '../../../store/movie/top_rated/top_rated';
import { RootState } from '../../../store/store';
import { IMovie } from '../../../types/movie';
import { MovieProps, MovieResults, MovieType } from '../../../types/types';
import Container from '../Container/Container';
import Poster from '../Poster/Poster';
import './Hero.scss';

const Hero = () => {

    const dispatch = useDispatch();
    const postStatus = useSelector((state:RootState) => state.popular.status);
  
    const popular = useSelector(selectPopular);
    const top_movies = useSelector(selectTop);

    useEffect(() =>{
      if (postStatus === 'idle') {
        dispatch(fetchPopular());
        dispatch(fetchTop());
      }
      console.log(popular);
    }, [postStatus, dispatch])

  return (
    <div className="hero">
        <Poster/>
        <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Trending movies</h2>
              </div>
              <Container movies={popular}/>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Top rated</h2>
              </div>
              <Container movies={top_movies}/>
            </div>
        </div>
    </div>
  );
};

export default Hero;
