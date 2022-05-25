// import { createSlice } from '@reduxjs/toolkit';
// export const itemSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addItem(state, action) {
//       state.push(action.payload);
//     },
//   },
// });
// export const { addItem } = itemSlice.actions;

import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('item/add');
export const deleteItem = createAction('item/delete');
export const filterItem = createAction('item/filter');
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
