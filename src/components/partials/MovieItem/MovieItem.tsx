import React, { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail, selectDetail } from '../../../store/movie/movie-detail/movie-detail';
import { IMovie, MovieProp } from '../../../types/movie';
import './MovieItem.scss';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { addFavorite, removeFavorite, selectFavorites } from '../../../store/favorites/favorites';
import { useAppDispatch } from '../../../store/favorites/hook';

const MovieItem: FC<MovieProp> = ({movie, className}) => {

  const dispatch = useAppDispatch();
  const favorites = useSelector(selectFavorites);
  const isFav = favorites.some(favorite => favorite.id == movie.id);

  const addRemoveItem = (e: any) =>{
      e.preventDefault();
      if(isFav){
        dispatch(removeFavorite(movie.id));
      }else{
        dispatch(addFavorite(movie));
      }
      console.log(isFav);
  }

  const default_img = 'http://image.tmdb.org/t/p/w500/';

  return (
    <div className={className}>
        <img src={default_img + movie.poster_path}/>
        <span className="movie__title">{movie?.title}</span>
        <Rating 
        className="movie__rate"
        defaultValue={movie.vote_average/2} 
        precision={0.5} 
        size="large"
        readOnly
        icon={<StarIcon/>}
        emptyIcon={<StarBorderIcon/>}
        />
        <span className="movie__favorite" onClick={addRemoveItem}>
        {isFav
        ? <BsHeartFill className="icon"/> 
        : <BsHeart className="icon"/>}
      </span>
    </div>
  );
};

export default MovieItem;
