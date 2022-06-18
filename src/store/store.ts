import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import favorites from "./favorites/favorites";
import search from "./movie/search/search";
import { loadState } from "./localStorage";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
  }

  const rootReducer = combineReducers({
	popular,
	top_rated,
	playing,
	upcoming,
	detail,
	credits,
	videos,
	photos,
	recommended,
	similar,
	favorites,
	search
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
  })

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;