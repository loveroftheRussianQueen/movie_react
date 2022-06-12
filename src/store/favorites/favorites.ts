import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IFavoriteMovie, IFavoritesState } from './types';

const initialState: IFavoritesState = {
   favoriteMovies: [],
}

const favoriteSlice = createSlice({
  name:'favorite',
  initialState,
  reducers:{
    addFavorite(state, action: PayloadAction<IFavoriteMovie>){
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>){
      const movieIndex = state.favoriteMovies.findIndex((movie) => movie.id === action.payload);
      state.favoriteMovies.splice(movieIndex, 1);
    }
  },
})

export const selectFavorites = (state: RootState) => state.favorites.favoriteMovies;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;