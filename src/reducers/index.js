import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
    ordersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))