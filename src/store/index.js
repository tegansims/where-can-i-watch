/* eslint-disable global-require */
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancer = composeWithDevTools({
  // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
})(applyMiddleware(...middlewares))

const store = createStore(rootReducer, undefined, enhancer)
sagaMiddleware.run(rootSaga)

export default store
