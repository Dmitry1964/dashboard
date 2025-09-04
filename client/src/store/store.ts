import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationReducer from 'src/slicies/location-slice/location-slice';
import userAuthReducer from 'src/slicies/user-slice/user-auth-slice';

const rootReducer = combineReducers({
  location: locationReducer,
  userAuth: userAuthReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;