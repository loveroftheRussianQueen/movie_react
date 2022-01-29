
import React from 'react';
import { MovieProps } from '../../types/types';
import Container from '../Container/Container';
import './Hero.scss';

const Hero = ({movies}: MovieProps) => {
  return (
    <div className="hero">
        <h1>trending today</h1>
        <Container movies={movies}/>
    </div>
  );
};

export default Hero;
