import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService.js';

const initialState = {
  user: null,
  isLoading: false,
  isSuccessfull: false,
  isError: false,
  message: '',
};

const login = createAsyncThunk('auth/login', async (userData, thunkApi) => {
  try {
    const { username, password } = userData;

    return await authService.login(username, password);
  } catch (err) {}
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccessfull = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
