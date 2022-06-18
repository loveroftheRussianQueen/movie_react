import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPopularMovies, fetchSearch } from '../../API/services';
import Header from '../../components/partials/Header/Header';
import MovieItem from '../../components/partials/MovieItem/MovieItem';
import { selectFavorites } from '../../store/favorites/favorites';
import { fetchPlaying, selectPlaying } from '../../store/movie/now-playing/now-playing';
import { fetchPopular, selectPopular, selectStatus } from '../../store/movie/popular/popular';
import { FetchStatus } from '../../types/fetch-status';
import { IMovie } from '../../types/movie';
import { ISearch } from '../../types/search';

import { AiFillCloseCircle } from 'react-icons/ai';
import './Search.scss';

const Search = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [fetchStatus, setFetchStatus] = useState(null);
  const [totalCount, setTotalCount] = useState<number | undefined>(0);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

  const handleScroll = (e: any) =>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && movies.length < totalCount!){
        setLoading(true);
        console.log('fuck');
        console.log(loading);
    }
    }
    
    useEffect(() =>{
      document.addEventListener('scroll', handleScroll);
      return function(){
        document.removeEventListener('scroll', handleScroll);
      }
  }, [])

  useEffect(() =>{
      const fetchSearching = async ()=>{
      const response = await axios.get<ISearch<IMovie>>(`${API_BASE}search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${currentPage}&include_adult=false`);
        console.log(response.data);
        return response.data;
      }
      if(query.length > 0){
        fetchSearching()
        .then((response) =>{
            setMovies(response.results);
            setTotalCount(response.total_results);
        })}
        else{
          setMovies([]);
        }
  }, [query])

  useEffect(() =>{
    const fetchSearching = async ()=>{
      const response = await axios.get<ISearch<IMovie>>(`${API_BASE}search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${currentPage}&include_adult=false`);
        console.log(response.data);
        return response.data;
      }
    if(loading){
      fetchSearching()
      .then((response) =>{
        setMovies([...movies, ...(response?.results ?? [])]);
        setCurrentPage(prevState => prevState + 1);
      })
      .finally(() => {setLoading(false)})
  }
  }, [currentPage])


  return (
    <div>
        <Header/>
    <div className="main">
      <div className="main__search">
        <form>
          <input 
          type="search" 
          placeholder="Search for a movie..." 
          autoFocus
          onChange={event => setQuery(event.target.value)}
          value={query}/>
        </form>
        <button className="clear" onClick={() => setQuery("")}><AiFillCloseCircle/></button>
      </div>
      <div className="main__container">
      <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Found movies</h2>
                <span>{movies?.length ? movies.length + ' items' : '0 items'}</span>
          </div>
          <div className="main__container__grid" onScroll={handleScroll}>
          {movies?.length ? movies.map((movie) =>
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><MovieItem movie={movie} className="movie_mini"/></Link>
                ) : <h1>Nothing here..</h1>}
          </div>
      </div>
    </div>
    </div>
  )
}

export default Search;