import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationReducer from 'src/slicies/location-slice/location-slice';
import userRegisterReducer from 'src/slicies/user-auth-slice/user-register-slice';
import newPartnerReducer from 'src/slicies/new-partners-slice/new-partners-slice'

const rootReducer = combineReducers({
  location: locationReducer,
  userRegister: userRegisterReducer,
  newPartner: newPartnerReducer
  // userStatus: userStatusReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;