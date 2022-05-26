import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './contacts/items-reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contacts: reducers,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

// import { configureStore } from '@reduxjs/toolkit';
// import itemsSlice from './contacts/itemSlice';
// import logger from 'redux-logger';
// export const store = configureStore({
//   reducer: {
//     contacts: itemsSlice,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });
