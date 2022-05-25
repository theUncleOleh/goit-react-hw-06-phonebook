import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './contacts/items-reducer';
import logger from 'redux-logger';

// export const increment = createAction('items/increment');
// export const decrement = createAction('items/decrement');

// const itemsReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
export const store = configureStore({
  reducer: {
    contacts: reducers,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
