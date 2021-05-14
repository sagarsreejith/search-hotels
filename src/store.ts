import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import localforage from 'localforage';
import { rootReducer } from './reducers/RootReducer';
const persistConfig = {
  key: 'root',
  storage: localforage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
