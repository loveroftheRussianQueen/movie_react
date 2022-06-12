import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { IMovieCredits } from '../../../types/movie-credits';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IMovieCreditsState } from './types';

const initialState: IMovieCreditsState = {
    movieCredits: null,
    fetchStatus: null,
}

const API_BASE = process.env.REACT_APP_API_BASE;
const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const detailSlice = createSlice({
  name:'credits',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchCredits.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchCredits.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.movieCredits = action.payload
      })
      .addCase(fetchCredits.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchCredits = createAsyncThunk('credits/fetchCredits', async (id: number) => {
  const response = await axios.get<IMovieCredits>(`${API_BASE}movie/${id}/credits?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data;
})

export const selectCredits = (state: RootState) => state.credits.movieCredits;
export default detailSlice.reducer;