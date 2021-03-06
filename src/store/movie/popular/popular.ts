import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IPopularMoviesState } from './types';

const initialState: IPopularMoviesState = {
    popularMovie: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const popularSlice = createSlice({
  name:'popular',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchPopular.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.popularMovie = action.payload
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchPopular = createAsyncThunk('popular/fetchPopular', async (page: number) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}movie/popular?api_key=${TMDB_API_KEY}&page=${page}`);
  console.log(response.data);
  return response.data;
})

export const selectPopular = (state: RootState) => state.popular.popularMovie;
export const selectStatus = (state: RootState) => state.popular.fetchStatus;
export default popularSlice.reducer;