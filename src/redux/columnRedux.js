import shortid from 'shortid';

const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const getAllColumns = (state) => state.columns;

export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      console.log('Dodano kolumnę:', action.payload);
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
