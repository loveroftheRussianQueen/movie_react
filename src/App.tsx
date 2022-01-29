import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieProps, MovieResults, MovieType } from "./types/types";
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {

  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() =>{
    fetchMovies();
  }, [])

  async function fetchMovies() {
    try{
      let apikey = '0ce1e51fc4f5b92e2f8984a6aa026503';
      let url: string = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
      url = url + apikey;
      const response = await axios.get<MovieResults>(url);
      setMovies(response.data.results);
      console.log(response.data.results);
    }catch(e){
      alert(e);
    }
}

  return (
    <div className="App">
      <Header/>
      <Hero movies={movies}/>
    </div>
  );
}

export default App;


