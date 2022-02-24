import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

import { dangKyReducer } from "../container/module/reducer"

export const rootReducer = combineReducers({
    dangKyReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))