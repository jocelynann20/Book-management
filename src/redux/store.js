import { createStore, combineReducers } from 'redux';
import bookReducer from './reducers/Bookreducer';

const rootReducer = combineReducers({
  books: bookReducer
});

const store = createStore(rootReducer);

export default store;