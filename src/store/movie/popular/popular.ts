import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { RootState } from '../../store';
import { IPopularMoviesState } from './types';

const initialState: IPopularMoviesState = {
    popularMovie: null,
    fetchStatus: null,
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
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.popularMovie.results = state.popularMovie.results.concat(action.payload);
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
      })
  }
})

export const fetchPopular = createAsyncThunk('popular/fetchPopular', async () => {
  const response = await axios.get(`${API_BASE}movie/popular?api_key=${TMDB_API_KEY}`);
  console.log(response.status);
  console.log(response.data);
  return response.data;
})

export default popularSlice.reducer;