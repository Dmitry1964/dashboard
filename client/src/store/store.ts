import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationReducer from 'src/slicies/location-slice/location-slice';
import userRegisterReducer from 'src/slicies/user-auth-slice/user-register-slice';
// import userStatusReducer from 'src/slicies/user-auth-slice/user-status-slice';

const rootReducer = combineReducers({
  location: locationReducer,
  userRegister: userRegisterReducer,
  // userStatus: userStatusReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;