import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IPopularMoviesState } from '../../types';

interface User{
    name: string,
    nickname: string,
    website: string,
}
const initialState = {
    popularMovie: [] as IMovie[],
    status: 'idle',
    error: '',
    popularSearchPage: 1,
}

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const popularSlice = createSlice({
  name:'popular',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchPopular.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.popularMovie = state.popularMovie.concat(action.payload)
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.status = 'failed'
        //state.error = action.error.message
      })
  }
})

export const fetchPopular = createAsyncThunk('popular/fetchPopular', async () => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/popular?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectPopular = (state: RootState) => state.popular.popularMovie;
export default popularSlice.reducer;