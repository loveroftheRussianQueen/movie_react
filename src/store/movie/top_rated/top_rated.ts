import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { ITopMoviesState } from './types';

const initialState: ITopMoviesState = {
    topMovie: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const topSlice = createSlice({
  name:'top',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchTop.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchTop.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.topMovie = action.payload
      })
      .addCase(fetchTop.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchTop = createAsyncThunk('top/fetchTop', async (page: number) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}`);
  console.log(response.data);
  return response.data;
})

export const selectTop = (state: RootState) => state.top_rated.topMovie;
export const selectStatus = (state: RootState) => state.top_rated.fetchStatus;
export default topSlice.reducer;