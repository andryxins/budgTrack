import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authorisationRequest } from '../../Api/ApiRequests';

export const logIn = createAsyncThunk(
  'user/logInInfoStatus',
  async (authData, thunkApi) => {
    const { data: userData } = await authorisationRequest();
    if (
      authData.login === userData.login &&
      authData.password === userData.password
    ) {
      return userData;
    }
    return thunkApi.rejectWithValue(null);
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  //   reducer: {
  //     getUser: => ({}),
  //   },
  extraReducers: {
    [logIn.fulfilled]: (state, action) => {
      return { ...action.payload };
    },
    [logIn.rejected]: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice;
