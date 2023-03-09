import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middlewares = [sagaMiddleware, createLogger()];

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
