import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, selectVideos } from '../../../store/movie/movie-videos/movie-videos';
import { IMovie, IMovieProp } from '../../../types/movie';
import './Poster.scss';
import { AiFillCloseCircle } from 'react-icons/ai';


const Trailer:FC<IMovieProp> = ({movie, active} : IMovieProp) => {

  const dispatch = useDispatch();

  const videos = useSelector(selectVideos);
  const trailer = videos!.results[0]!.key;

  useEffect(() =>{
      dispatch(fetchVideos(movie.id));
  }, [movie.id])

  return (
    <div className="trailer__item">
      <iframe src={`https://www.youtube.com/embed/` + trailer} width="800px" height = "500px" title="trailer"/>
      <div><AiFillCloseCircle/></div>
    </div>
  );
}

export default Trailer;