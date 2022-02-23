import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieProps, MovieResults, MovieType } from "./types/types";
import './App.scss';
import Header from "./components/partials/Header/Header";
import Hero from "./components/partials/Hero/Hero";
import { ISearch } from "./types/search";
import { IMovie } from "./types/movie";
import { fetchPopularMovies } from "./API/services";
import Home from "./pages/Home";
import Container from "./components/partials/Container/Container";

const App = () => {

  const [movies, setMovies] = useState<IMovie[]>();

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;


