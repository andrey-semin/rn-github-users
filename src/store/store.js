import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './entities/rootReducer'

const middlewares = [thunk]

if (__DEV__) {
  middlewares.push(logger)
}

const store = createStore(reducers, undefined, applyMiddleware(...middlewares))

export default store
