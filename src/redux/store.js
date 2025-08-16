import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import shortid from 'shortid';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const getFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite);

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchString = (payload) => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const toggleCardFavorite = (id) => ({ type: 'TOGGLE_CARD_FAVORITE', payload: id });

const reducer = (state = initialState, action) => {
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
    case 'UPDATE_SEARCHSTRING': {
      return { ...state, searchString: action.payload };
    }
    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
        ),
      };
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
