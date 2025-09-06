import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "src/app/app-types";
import api from "src/api/api";
import { setToken } from "src/api/token";

interface UserState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
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
  status: 'idle',
}

export const fetchRegisterUser = createAsyncThunk('user/fetchRegisterUser', async (user: User) => {
  const response = await api.post('/auth/register', user);
  setToken(response.data.token);
  return response.data.user;
});

export const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(fetchRegisterUser.rejected, (state) => {
      state.status = 'failed';
    });
  },
})

export default userAuthSlice.reducer;