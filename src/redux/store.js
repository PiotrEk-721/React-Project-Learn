import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': {
      const newColumn = {
        ...action.payload,
        id: shortid(),
      };
      return { ...state, columns: [...state.columns, newColumn] };
    }
    case 'ADD_CARD': {
      const newCard = {
        ...action.payload,
        id: shortid(),
      };
      return { ...state, cards: [...state.cards, newCard] };
    }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
