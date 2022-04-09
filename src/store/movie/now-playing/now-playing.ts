import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IPlayingMoviesState } from './types';

const initialState: IPlayingMoviesState = {
    playingMovie: null,
    fetchStatus: null,
    page: 1,
  };

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const playingSlice = createSlice({
  name:'playing',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchPlaying.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchPlaying.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.playingMovie = action.payload
      })
      .addCase(fetchPlaying.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  },
})

export const fetchPlaying = createAsyncThunk('playing/fetchPlaying', async (page: number) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`);
  console.log(response.data);
  return response.data;
})


export const selectPlaying = (state: RootState) => state.playing.playingMovie;
export const selectStats = (state: RootState) => state.playing.fetchStatus;
export default playingSlice.reducer;