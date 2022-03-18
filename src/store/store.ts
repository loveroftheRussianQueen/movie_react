import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, createStore }
from "redux";
import thunk from "redux-thunk";
import popular from "./movie/popular/popular";
import top_rated from "./movie/top_rated/top_rated";
import playing from "./movie/now-playing/now-playing";
import upcoming from "./movie/upcoming/upcoming";
import detail from "./movie/movie-detail/movie-detail";
import credits from "./movie/credits/credits";

export const store = configureStore({
	reducer: {
	  popular,
	  top_rated,
	  playing,
	  upcoming,
	  detail,
	  credits
	}
  })
  
export type RootState = ReturnType<typeof store.getState>;