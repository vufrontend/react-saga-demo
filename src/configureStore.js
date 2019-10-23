import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import logger from 'redux-logger'

import history from './history'


export const configureStore = (rootReducer, sagas) => {
  const reducer = combineReducers({
    router: connectRouter(history),
    ...rootReducer,
  })

  const sagaMiddleware = createSagaMiddleware()

  const middleware = []

  middleware.push(sagaMiddleware)
  if (process.env.REACT_APP_DEBUG) {
    middleware.push(logger)
  }

  const middlewares = applyMiddleware(
    sagaMiddleware,
    ...middleware,

    routerMiddleware(history),
    // process.env.DEBUG === 'true' ? logger : null
  )

  const devtools = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f

  const store = createStore(
    reducer,
    compose(middlewares, devtools),
  )

  sagaMiddleware.run(sagas)

  return { store, history }
}
