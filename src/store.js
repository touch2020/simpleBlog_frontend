import { applyMiddleware, createStore } from "redux";
import rootReducer from "./_reducers";
import ReduxThunk from 'redux-thunk'
import { createLogger } from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware'

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(ReduxThunk,promiseMiddleware, logger))

export default store