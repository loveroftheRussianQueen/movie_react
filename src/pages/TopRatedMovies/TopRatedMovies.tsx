import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/partials/Header/Header';
import MovieItem from '../../components/partials/MovieItem/MovieItem';
import { fetchTop, selectStatus, selectTop } from '../../store/movie/top_rated/top_rated';
import { FetchStatus } from '../../types/fetch-status';
import { IMovie } from '../../types/movie';

import './TopRatedMovies.scss';

const TopRatedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [fetchStatus, setFetchStatus] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const dispatch = useDispatch();
  const top_rated = useSelector(selectTop);
  const status = useSelector(selectStatus);

  const handleScroll = (e: any) =>{
        if(e.scrollHeight - (e.scrollTop + window.innerHeight) < 100 
        && movies.length <= totalCount){
          setFetchStatus(null);
          setCurrentPage(prevState => prevState + 1);
          console.log(currentPage);
      }
    }

    useEffect(() =>{
          document.addEventListener('scroll', handleScroll);
    },[])

    useEffect(() =>{
      if(status == null){
        console.log(fetchStatus);
          dispatch(fetchTop());
    }else if(status == FetchStatus.SUCCESS){
      setMovies([...movies, ...(top_rated?.results ?? [])]);
      console.log(currentPage);
    }
    }, [status, currentPage])

  return (
    <div>
        <Header/>
    <div className="main">
      <div className="main__container">
      <div className="section__header mb-2">
                <h2 style={{color:"#fff"}}>Top movies</h2>
                <span>{movies.length ? movies.length + ' items' : '0 items'}</span>
          </div>
          <div className="main__container__grid" onScroll={handleScroll}>
          {movies.length ? movies.map((movie) =>
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}><MovieItem movie={movie} className="movie_mini"/></Link>
                ) : <h1>fuck</h1>}
          </div>
      </div>
    </div>
    </div>
  )
}

export default TopRatedMovies;