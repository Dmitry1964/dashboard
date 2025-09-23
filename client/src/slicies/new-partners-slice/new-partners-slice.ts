import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiFns from "src/api/api-fns";
import { FetchStatus, PartnerObjectKeys } from "src/app/app-constans";
import { INewPartners } from "src/app/app-types";


interface NewPartnersState {
  newPartners: INewPartners;
  fetchStatus: FetchStatus;
  message: string
}

const initialState : NewPartnersState = {
 newPartners: {
  inn:'',
  shortName: ''
 },
 fetchStatus: FetchStatus.Idle,
 message: ''
} 

const fetchNewPartners = createAsyncThunk<INewPartners, string, { rejectValue: string }>(
  'partners/fetchNewPartner',
  async (code: string, { rejectWithValue }) => {
    const response = await apiFns.get(`egr?req=${code}&key=${import.meta.env.VITE_FNS_KEY}`);
    const { items } = response.data;
    if (!items || !items.length) {
      return rejectWithValue('Организация с таким ИНН не найдена');
    }
    const newPartners: INewPartners = {
      inn: items[0][PartnerObjectKeys.INN],
      shortName: items[0][PartnerObjectKeys.ShortName]
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
    builder.addCase(fetchNewPartners.fulfilled, (state, action: PayloadAction<INewPartners>) => {
      state.newPartners = action.payload;
      state.fetchStatus = FetchStatus.Succeeded;
    });
    builder.addCase(fetchNewPartners.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.fetchStatus = FetchStatus.Failed
      state.message = action.payload ?? 'Произошла ошибка при запросе'
    })
  },
})


export default newPartnersSlice.reducer;