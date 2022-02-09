import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieProps, MovieResults, MovieType } from "./types/types";
import './App.scss';
import Header from "./components/partials/Header/Header";
import Hero from "./components/partials/Hero/Hero";
import { ISearch } from "./types/search";
import { IMovie } from "./types/movie";
import { fetchPopularMovies } from "./API/services";

const App = () => {
  const API_BASE = 'https://api.themoviedb.org/3/';
  const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';
  const API_LANGUAGE = 'en-US';
  const  API_IMAGE_PATH = 'https://image.tmdb.org/t/p/';

  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() =>{
        fetchPopularMovies().then((response) =>{
              setMovies(response.data.results);
        })
        console.log(movies);
  }, [])

  return (
    <div className="App">
      <Header/>
      {
        // Show Hero component only when there are some movies
        !!(movies?.length) && <Hero movies={movies}/>
      }
    </div>
  );
}

export default App;


