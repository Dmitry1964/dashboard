import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "src/app/app-types";
import api from "src/app/api";

interface UserState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    position: '',
  },
  status: 'idle',
}

const registerUser = createAsyncThunk('user/registerUser', async (user: User) => {
  const response = await api.post('/api/auth/register', user);
  return response.data;
});

export const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.status = 'failed';
    });
  },
})

export default userAuthSlice.reducer;