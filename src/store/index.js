import { createStore, combineReducers, applyMiddleware } from "redux";
import boardReducer from "./reducers/boardReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducer = combineReducers({
  boardReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
