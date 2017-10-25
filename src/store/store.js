import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axiosMiddleware from 'redux-axios-middleware'

import reducers from './entities/rootReducer'
import apiClient from './apiClient'

const middlewares = [thunk, axiosMiddleware(apiClient)]

if (__DEV__) {
  middlewares.push(logger)
}

const store = createStore(reducers, undefined, applyMiddleware(...middlewares))

export default store
