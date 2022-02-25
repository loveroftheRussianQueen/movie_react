import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IPopularMoviesState } from '../../types';

const initialState = {
    topMovie: [] as IMovie[],
    status: 'idle',
    error: '',
    popularSearchPage: 1,
}

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const topSlice = createSlice({
  name:'top',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchTop.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTop.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.topMovie = state.topMovie.concat(action.payload)
      })
      .addCase(fetchTop.rejected, (state, action) => {
        state.status = 'failed'
        //state.error = action.error.message
      })
  }
})

export const fetchTop = createAsyncThunk('popular/fetchTop', async () => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/top_rated?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectTop = (state: RootState) => state.top_rated.topMovie;
export default topSlice.reducer;