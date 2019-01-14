import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [reduxThunk];

if(process.env.NODE_ENV !== 'production'){
  middlewares.push(logger);
}


export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
  );
export let persistor = persistStore(store);

