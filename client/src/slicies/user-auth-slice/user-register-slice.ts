import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "src/app/app-types";
import api from "src/api/api";
import { setToken } from "src/api/token";
import { AuthStatus, FetchStatus } from "src/app/app-constans";
import { FetchRoutes } from "src/app/app-routes";

interface UserState {
  user: User;
  status: FetchStatus;
  message: string;
  authStatus: AuthStatus;
}

const initialState: UserState = {
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    // role: 'user',
  },
  status: FetchStatus.Idle,
  message: 'Регистрация пользователя',
  authStatus: AuthStatus.Unkhown,
}

export const fetchRegisterUser = createAsyncThunk('user/fetchRegisterUser', async (user: User) => {
  const response = await api.post(FetchRoutes.Register, user);
  setToken(response.data.token);
  return response.data.user;
});

export const userRegisterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.status = FetchStatus.Loading;
    });
    builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
      state.status = FetchStatus.Succeeded;
      state.user = action.payload;
      state.message = 'Пользователь успешно зарегистрирован';
      state.authStatus = AuthStatus.Auth;
    });
    builder.addCase(fetchRegisterUser.rejected, (state) => {
      state.status = FetchStatus.Failed;
      state.message = 'Пользователь с таким email уже существует';
    });
  },
})

export default userRegisterSlice.reducer;