import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { filtersReducer, tasksReducer } from './reducer';

// Композиція редюсерів
const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
