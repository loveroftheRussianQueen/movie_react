import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, createStore }
from "redux";
import thunk from "redux-thunk";
import popular from "./movie/popular/popular";

export const store = configureStore({
	reducer: {
	  popular
	}
  })
  
export type RootState = ReturnType<typeof store.getState>;