import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authorisationRequest } from '../../Api/ApiRequests';

type SliceState = null | {};

const userSlice = createSlice({
  name: 'user',
  initialState: null as SliceState,
  reducers: {},
  // extraReducers: {
  //   [logIn.fulfilled]: (state, action) => ({ ...action.payload }),
  //   [logIn.rejected]: (state, action) => action.payload,
  // },
});

export default userSlice;
