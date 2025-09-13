import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/api/api";
import { AuthStatus } from "src/app/app-constans";
import { FetchRoutes } from "src/app/app-routes";


interface UserStatusState {
  status: AuthStatus;
}

const initialState: UserStatusState = {
  status: AuthStatus.Unkhown,
}

export const fetchStatusUser = createAsyncThunk('user/fetchStatusUser', async () => {
  const response = await api.get(FetchRoutes.UserInfo);
  return response.data;
});

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatusUser.pending, (state) => {
      state.status = AuthStatus.Loading;
    });
    builder.addCase(fetchStatusUser.fulfilled, (state) => {
      state.status = AuthStatus.Auth;
    });
    builder.addCase(fetchStatusUser.rejected, (state) => {
      state.status = AuthStatus.NoAuth;
    });
  },
})

export default userStatusSlice.reducer;