import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { ITopMoviesState } from './types';

const initialState: ITopMoviesState = {
    topMovie: null,
    fetchStatus: null,
  };

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

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
        state.topMovie = {
            results: action.payload
        }
      })
      .addCase(fetchTop.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchTop = createAsyncThunk('top/fetchTop', async () => {
  const response = await axios.get<MovieResults>(`${API_BASE}movie/top_rated?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data.results;
})

export const selectTop = (state: RootState) => state.top_rated.topMovie;
export default topSlice.reducer;