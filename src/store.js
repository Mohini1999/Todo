import { createStore } from "redux";
import combineReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(combineReducers, composeWithDevTools());