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

import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const addItem = createAction('item/add', (name, number, id) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const reducer = createReducer([], {
  [addItem]: (state, action) => state.push(action.payload),
});
