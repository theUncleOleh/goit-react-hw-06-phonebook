import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItem } from './items-actions';

export const myReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addItem]: (state, action) => [...state, action.payload],
    [deleteItem]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  }
);

export const filterReducer = createReducer('', {
  [filterItem]: (_, action) => action.payload,
});

export const reducers = combineReducers({
  item: myReducer,
  filter: filterReducer,
});
