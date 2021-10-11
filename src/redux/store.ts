import { Store, AnyAction } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducer';
import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask: Task;
}

export const makeStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware),
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
    preloadedState: {},
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer', () => {
      const newRootReducer = require('./reducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export default createWrapper<AppStore>(makeStore, {
  debug: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
});
