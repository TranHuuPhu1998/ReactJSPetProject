import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import walletApi from 'app/api/wallets';
import { ResponseQueryWallets } from 'data/types';

// Thunk
export const actionDateCoverWallets = createAsyncThunk('wallets/cover', async (params: any) => {
  const response = await walletApi.getDateCoverWallets(params);
  return response.data;
});

// Reducer
const initialState = {} as ResponseQueryWallets;

export const walletsRateSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionDateCoverWallets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actionDateCoverWallets.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(actionDateCoverWallets.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default walletsRateSlice.reducer;
