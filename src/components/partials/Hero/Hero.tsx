import React, { useEffect, useState } from 'react';
import { IMovie } from '../../../types/movie';
import { MovieProps, MovieResults, MovieType } from '../../../types/types';
import Container from '../Container/Container';
import Poster from '../Poster/Poster';
import './Hero.scss';

const Hero = () => {

    const [movie, setMovie] = useState<IMovie>();
    const [movieItems, setMovieItems] = useState<MovieProps>();

  return (
    <div className="hero">
        <Poster/>
        <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Trending movies</h2>
              </div>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Top rated</h2>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
