import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';
import transactionsSlice from './transactionsSlice/transactionsSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
});

export default store;
