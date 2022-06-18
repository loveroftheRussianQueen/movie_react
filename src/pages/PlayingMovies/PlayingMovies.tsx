import { current } from 'immer';
import React, { EventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/partials/Header/Header';
import MovieItem from '../../components/partials/MovieItem/MovieItem';
import Movies from '../../components/partials/Movies/Movies';
import { fetchPlaying, selectPlaying, selectStatus } from '../../store/movie/now-playing/now-playing';
import { FetchStatus } from '../../types/fetch-status';
import { IMovie } from '../../types/movie';
import { ISearch } from '../../types/search';
import './PlayingMovies.scss';

const PlayingMovies = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [fetchStatus, setFetchStatus] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const dispatch = useDispatch();
  const playing = useSelector(selectPlaying);
  const status = useSelector(selectStatus);

  const handleScroll = (e: any) =>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && totalCount < playing?.total_results!){
        setLoading(true);
        console.log('scroll');
        console.log(movies);
    }
    }

    useEffect(() =>{
        dispatch(fetchPlaying(1));
        document.addEventListener('scroll', handleScroll);
        return function(){
          document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() =>{
      if(loading){
        console.log(fetchStatus);
        dispatch(fetchPlaying(currentPage));
        setMovies([...movies, ...(playing?.results ?? [])]);
        setCurrentPage(prevState => prevState + 1);
    }
    setLoading(false);
    console.log(loading);
    }, [currentPage, loading])

  return (
    <div>
        <Header/>
    <div className="main">
      <div className="main__container">
      <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Now playing movies</h2>
                <span>{movies.length ? movies.length + ' items' : '0 items'}</span>
          </div>
          <div className="main__container__grid" onScroll={handleScroll}>
          {movies.length ? movies.map((movie) =>
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><MovieItem movie={movie} className="movie_mini"/></Link>
                ) : <h1 style={{color: "white"}}>Loading...</h1>}
          </div>
      </div>
    </div>
    </div>
  )
}

export default PlayingMovies;