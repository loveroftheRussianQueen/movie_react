import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/partials/Header/Header';
import Movies from '../../components/partials/Movies/Movies';
import popular, { fetchPopular, selectPopular } from '../../store/movie/popular/popular';

const PopularMovies = () => {

  const dispatch = useDispatch();
  const popular = useSelector(selectPopular);

  useEffect(() =>{
        dispatch(fetchPopular());
  }, [dispatch])
  return (
    <div>
    <Header/>
    <Movies movies={popular}/>
</div>
  )
}

export default PopularMovies;