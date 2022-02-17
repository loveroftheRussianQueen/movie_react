import React, { useEffect, useState } from 'react';
import { IMovie } from '../../../types/movie';
import { MovieProps, MovieResults, MovieType } from '../../../types/types';
import Container from '../Container/Container';
import Poster from '../Poster/Poster';
import './Hero.scss';


const Hero = ({movies}: MovieProps) => {

    const [movie, setMovie] = useState<IMovie>();
    const [movieItems, setMovieItems] = useState<MovieProps>();

    useEffect(() =>{

    },[movies])


  return (
    <div className="hero">
        {movies && <Poster movies={movies}/>}
        <Container show={4} movies={movies}/>
        <Container show={1} movies={movies}/>
    </div>
  );
};

export default Hero;
