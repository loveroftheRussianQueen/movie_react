import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../../API/services';
import { FetchStatus } from '../../../types/fetch-status';
import { IMovie } from '../../../types/movie';
import { ISearch } from '../../../types/search';
import { MovieResults } from '../../../types/types';
import { RootState } from '../../store';
import { ISearchQueryAction, ISearchState } from './types';

const initialState: ISearchState = {
    searchQuery: '',
    searchPage: 1,
    searchResult: null,
    fetchStatus: null,
  };

  const API_BASE = process.env.REACT_APP_API_BASE;
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        state.fetchStatus = FetchStatus.PENDING
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.SUCCESS
        // Add any fetched posts to the array
        state.searchResult = action.payload
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.FAILURE
        //state.error = action.error.message
      })
  }
})

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (query: string) => {
  const response = await axios.get<ISearch<IMovie>>(`${API_BASE}search/movie/api_key=${TMDB_API_KEY}&query=${query}&page=1&include_adult=false`);
  console.log(response.data);
  return response.data;
});

export const selectSearchedMovies = (state: RootState) => state.search.searchResult;
export default searchSlice.reducer;