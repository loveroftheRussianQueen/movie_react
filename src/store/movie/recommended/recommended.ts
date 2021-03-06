import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IRecommendedMoviesState } from './types';

const initialState: IRecommendedMoviesState = {
    recommendedMovie: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const recommendedSlice = createSlice({
  name:'recommended',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchRecommended.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchRecommended.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.recommendedMovie = action.payload
      })
      .addCase(fetchRecommended.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchRecommended = createAsyncThunk('recommended/fetchRecommended', async (id: number) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}movie/${id}/recommended?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data;
})

export const selectRecommended = (state: RootState) => state.recommended.recommendedMovie;
export default recommendedSlice.reducer