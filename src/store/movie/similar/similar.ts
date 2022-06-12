import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { ISimilarMoviesState } from './types';

const initialState: ISimilarMoviesState = {
    similarMovie: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const similarSlice = createSlice({
  name:'similar',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilar.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.similarMovie = {
            results: action.payload
        }
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchSimilar = createAsyncThunk('similar/fetchSimilar', async (id: number) => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/${id}/similar?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectSimilar = (state: RootState) => state.similar.similarMovie;
export default similarSlice.reducer;