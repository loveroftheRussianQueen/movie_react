import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { IMovieDetailsState } from './types';

const initialState: IMovieDetailsState = {
    movieDetails: null,
    fetchStatus: null,
    error: '',
}

const API_BASE = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '73b31f15b44a93f52789c751c34a5d7d';

const detailSlice = createSlice({
  name:'detail',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchDetail.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.movieDetails = action.payload
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchDetail = createAsyncThunk('detail/fetchDetail', async (id: number) => {
  const response = await axios.get<IMovie>(`${API_BASE}movie/${id}?api_key=${TMDB_API_KEY}`);
  console.log(response.data);
  return response.data;
})

export const selectDetail = (state: RootState) => state.detail.movieDetails;
export default detailSlice.reducer;