import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, selectVideos } from '../../../store/movie/movie-videos/movie-videos';
import { IMovie, Movie } from '../../../types/movie';
import './Poster.scss';

import Youtube from 'react-youtube';

const Trailer:FC<Movie> = ({movie, active}: Movie) => {

  const dispatch = useDispatch();

  const videos = useSelector(selectVideos);
  const trailer = videos?.results[0].key;

  const modal_ref = useRef<any>(null);

  useEffect(() =>{
      dispatch(fetchVideos(movie.id));
  }, [movie.id])

  return (
    <div className="trailer__modal">
      <iframe src={`https://www.youtube.com/embed/` + trailer} width="800px" height = "500px" title="trailer"/>
    </div>
  );
}

export default Trailer;