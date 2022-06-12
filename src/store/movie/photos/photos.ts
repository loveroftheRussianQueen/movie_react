import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IImages } from '../../../types/images';
import { IMovie } from '../../../types/movie';
import { IVideos } from '../../../types/videos';
import { RootState } from '../../store';
import { IMovieImagesState } from './types';

const initialState: IMovieImagesState = {
    moviePhotos: null,
    fetchStatus: null,
}

const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const photosSlice = createSlice({
  name:'photos',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.moviePhotos = action.payload
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (id: number) => {
  const response = await axios.get<IImages>(`${API_BASE}movie/${id}/images?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data;
})

export const selectPhotos = (state: RootState) => state.photos.moviePhotos;
export default photosSlice.reducer;