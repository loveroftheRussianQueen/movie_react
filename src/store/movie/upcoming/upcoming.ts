import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';

const initialState = {
    upcomingMovie: [] as IMovie[],
    status: 'idle',
    error: '',
    popularSearchPage: 1,
}

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const upcomingSlice = createSlice({
  name:'upcoming',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchUpcoming.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUpcoming.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.upcomingMovie = state.upcomingMovie.concat(action.payload)
      })
      .addCase(fetchUpcoming.rejected, (state, action) => {
        state.status = 'failed'
        //state.error = action.error.message
      })
  }
})

export const fetchUpcoming = createAsyncThunk('upcoming/fetchUpcoming', async () => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/upcoming?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectUpcoming = (state: RootState) => state.upcoming.upcomingMovie;
export default upcomingSlice.reducer;