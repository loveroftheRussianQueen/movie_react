import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular/popular";
import top_rated from "./movie/top_rated/top_rated";
import playing from "./movie/now-playing/now-playing";
import upcoming from "./movie/upcoming/upcoming";
import detail from "./movie/movie-detail/movie-detail";
import credits from "./movie/credits/credits";
import videos from "./movie/movie-videos/movie-videos";
import photos from "./movie/photos/photos";
import recommended from "./movie/recommended/recommended";
import similar from "./movie/similar/similar";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: {
	  popular,
	  top_rated,
	  playing,
	  upcoming,
	  detail,
	  credits,
	  videos,
	  photos,
	  recommended,
	  similar
	},
	middleware: [thunk]
  })
  
export type RootState = ReturnType<typeof store.getState>;