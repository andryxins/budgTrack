import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserTransactions } from '../../Api/ApiRequests';

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async thunkApi => {
    const { data } = await getUserTransactions();
    console.log(data.budgetHistory);
    return data.budgetHistory;
  },
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  //   reducer: {
  //     getAllTransactions: () => ({}),
  //   },
  extraReducers: {
    [getAllTransactions.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export default transactionsSlice;
