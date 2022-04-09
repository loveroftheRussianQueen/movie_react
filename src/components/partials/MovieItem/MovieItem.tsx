import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail, selectDetail } from '../../../store/movie/movie-detail/movie-detail';
import { IMovie } from '../../../types/movie';
import './MovieItem.scss';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const MovieItem = ({ movie }: { movie: IMovie }) => {

  const default_img = 'http://image.tmdb.org/t/p/w500/';

  return (
        <div className="movie">
        <img src={default_img + movie.poster_path}/>
        <span className="movie__title">{movie.title}</span>
        <Rating 
        className="movie__rate"
        defaultValue={movie.vote_average/2} 
        precision={0.5} 
        size="large"
        readOnly
        icon={<StarIcon/>}
        emptyIcon={<StarBorderIcon/>}
        />
      </div>
  );
};

export default MovieItem;
