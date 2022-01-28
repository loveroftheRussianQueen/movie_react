import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieProps, MovieType } from "./customTypings/types";
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
        const response = await axios.get<[MovieType]>(url);
        setMovies(response.data);
        console.log(response.data);

      }catch(e){
        alert('Error');
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


