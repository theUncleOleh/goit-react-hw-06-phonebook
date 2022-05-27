import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer, middleware } from './contacts/items-persistor';
import { persistStore } from 'redux-persist';
const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
// import { configureStore } from '@reduxjs/toolkit';
// import itemsSlice from './contacts/itemSlice';
// import logger from 'redux-logger';
// export const store = configureStore({
//   reducer: {
//     contacts: itemsSlice,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });
