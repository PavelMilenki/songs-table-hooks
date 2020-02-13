import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {songsReducer} from "./songsReducer";

const reducers = combineReducers({
    songsPage: songsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store
window.store = store;
