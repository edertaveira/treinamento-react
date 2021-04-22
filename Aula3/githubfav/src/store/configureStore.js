import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import appReducer from './reducers/appReducer';

const persistConfig = {
  key: 'RootStorage',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, appReducer);

const configureStore = () => {
  var store = createStore(persistedReducer, applyMiddleware(logger));
  var persistor = persistStore(store);
  return { store, persistor }
};

export default configureStore;
