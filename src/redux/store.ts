import { configureStore } from '@reduxjs/toolkit';

import sliceAuth from './features/auth/authSlice';
import { api } from './features/auth/auth';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: sliceAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
