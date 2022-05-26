import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { add, remove, filter } from './items-actions';

export const myReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  }
);

export const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export const reducers = combineReducers({
  items: myReducer,
  filter: filterReducer,
});
