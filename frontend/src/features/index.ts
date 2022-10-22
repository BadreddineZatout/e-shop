import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import modalsReducer from './modals';

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
