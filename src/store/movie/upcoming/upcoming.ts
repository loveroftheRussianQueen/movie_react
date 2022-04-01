import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IUpcomingMoviesState } from './types';

const initialState: IUpcomingMoviesState = {
    upcomingMovie: null,
    fetchStatus: null,
  };

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const upcomingSlice = createSlice({
  name:'upcoming',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchUpcoming.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchUpcoming.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.upcomingMovie = {
            results: action.payload
        }
      })
      .addCase(fetchUpcoming.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchUpcoming = createAsyncThunk('recommended/fetchRecommended', async () => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/upcoming?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectUpcoming = (state: RootState) => state.upcoming.upcomingMovie;
export default upcomingSlice.reducer