import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiFns from "src/api/api-fns";
import { FetchStatus, PartnerObjectKeys } from "src/app/app-constans";
import { IPartners } from "src/app/app-types";


interface NewPartnersState {
  partners: IPartners;
  fetchStatus: FetchStatus;
  message: string
}

const initialState : NewPartnersState = {
 partners: {
  inn:'',
  shortName: ''
 },
 fetchStatus: FetchStatus.Idle,
 message: ''
} 

export const fetchNewPartners = createAsyncThunk<IPartners, string, { rejectValue: string }>(
  'partners/fetchNewPartner',
  async (code: string, { rejectWithValue }) => {
    const response = await apiFns.get(`egr?req=${code}&key=${import.meta.env.VITE_FNS_KEY}`);
    const { items } = response.data;
    if (!items || !items.length) {
      return rejectWithValue('Организация с таким ИНН не найдена');
    }
    const newPartners: IPartners = {
      inn: items[0][PartnerObjectKeys.DIFINITION][PartnerObjectKeys.INN],
      shortName: items[0][PartnerObjectKeys.DIFINITION][PartnerObjectKeys.ShortName]
    };
    return newPartners;
  }
)

const newPartnersSlice = createSlice({
  name: 'new-partner',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewPartners.pending, (state) => {
      state.fetchStatus = FetchStatus.Loading
    });
    builder.addCase(fetchNewPartners.fulfilled, (state, action: PayloadAction<IPartners>) => {
      state.partners = action.payload;
      state.fetchStatus = FetchStatus.Succeeded;
    });
    builder.addCase(fetchNewPartners.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.fetchStatus = FetchStatus.Failed
      state.message = action.payload ?? 'Произошла ошибка при запросе'
    })
  },
})


export default newPartnersSlice.reducer;