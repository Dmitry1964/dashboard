import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationReducer from 'src/slicies/location-slice/location-slice';

const rootReducer = combineReducers({
  location: locationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;