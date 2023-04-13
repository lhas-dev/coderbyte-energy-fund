import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import fundsReducer from './slices/funds';

export const store = configureStore({
  reducer: {
    user: userReducer,
    funds: fundsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
