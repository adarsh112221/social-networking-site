import {createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "../reducers";
let store;
export function configureStore()
{
    store=createStore(combineReducers,applyMiddleware(thunk,logger));
    return store;
}