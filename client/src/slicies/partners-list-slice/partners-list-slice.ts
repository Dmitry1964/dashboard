import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/api/api";
import { FetchStatus } from "src/app/app-constans";
import { FetchRoutes } from "src/app/app-routes";
import { IPartners } from "src/app/app-types";


type PartnersListState = {
  partners: IPartners[];
  fetchStatus: FetchStatus;
  message: string;
}

const initialState: PartnersListState = {
  partners: [],
  fetchStatus: FetchStatus.Idle,
  message: ''
}

export const fetchPartnersList = createAsyncThunk<IPartners[]>(
  'partners-list/fetch',
  async () => {
    const response = await api.get(FetchRoutes.Partners);
    return response.data;
  }
)

const partnersListSlice = createSlice({
  name: 'partners-list',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPartnersList.pending, (state) => {
      state.fetchStatus = FetchStatus.Loading;
    });
    builder.addCase(fetchPartnersList.fulfilled, (state, action) => {
      state.partners = action.payload;
      state.fetchStatus = FetchStatus.Succeeded;
    });
    builder.addCase(fetchPartnersList.rejected, (state) => {
      state.fetchStatus = FetchStatus.Failed;
      state.message = 'Произошла ошибка при запросе';
    });
  }
})

export default partnersListSlice.reducer;