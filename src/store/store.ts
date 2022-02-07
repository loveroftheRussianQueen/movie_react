import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import firstReducer from "./movie/firstReducer";
/*import { rootReducer } from "./reducers";*/



export const store = createStore(firstReducer);