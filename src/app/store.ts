import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit';
import boardSlice from "./boardSlice"

export const store = configureStore({
    reducer:boardSlice
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
