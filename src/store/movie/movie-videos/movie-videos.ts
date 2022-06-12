import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { IVideos } from '../../../types/videos';
import { RootState } from '../../store';
import { IMovieVideosState } from './types';

const initialState: IMovieVideosState = {
    movieVideos: null,
    fetchStatus: null,
}

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const videosSlice = createSlice({
  name:'videos',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchVideos.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.movieVideos = action.payload
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async (id: number) => {
  const response = await axios.get<IVideos>(`${API_BASE}movie/${id}/videos?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data;
})

export const selectVideos = (state: RootState) => state.videos.movieVideos;
export default videosSlice.reducer;