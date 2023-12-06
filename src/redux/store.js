import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersReducer, tasksReducer } from './reducer';

const persistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasks'],
};

// Композиція редюсерів
const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();

export const store = createStore(persistedRootReducer, enhancer);

export const persistor = persistStore(store);
