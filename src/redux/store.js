import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux.js';
import columnsReducer from './columnRedux.js';
import cardsReducer from './cardRedux.js';
import searchStringReducer from './searchStringRedux.js';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
