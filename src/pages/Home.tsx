import React from 'react'
import Hero from '../components/partials/Hero/Hero';
import Poster from '../components/partials/Poster/Poster';
import { MovieProps } from '../types/types';

const Home = ({movies}: MovieProps) => {
  return (
    <>
        <Hero movies={movies}/>
    </>
  )
}

export default Home;