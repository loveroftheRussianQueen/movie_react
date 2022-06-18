import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IUpcomingMoviesState } from './types';

const initialState: IUpcomingMoviesState = {
    upcomingMovie: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

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
        state.upcomingMovie = action.payload
      })
      .addCase(fetchUpcoming.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchUpcoming = createAsyncThunk('upcoming/fetchUpcoming', async (page: number) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`);
  console.log(response.data);
  return response.data
})

export const selectUpcoming = (state: RootState) => state.upcoming.upcomingMovie;
export const selectStatus = (state: RootState) => state.upcoming.fetchStatus;
export default upcomingSlice.reducer;