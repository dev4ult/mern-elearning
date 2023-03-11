import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import courseService from './courseService.js';

const initialState = {
  courses: [],
  isSuccesfull: false,
  isError: false,
  isLoading: false,
  message: '',
};

const allCourses = createAsyncThunk('course/allCourses', async (temp, thunkApi) => {
  try {
    return await courseService.allCourses();
  } catch (err) {
    const message = 'test';

    return thunkApi.rejectWithValue(message);
  }
});

export { allCourses };

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.courses = [...action.payload]), (state.isSuccesfull = true);
      })
      .addCase(allCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.courses = [];
        state.message = action.payload;
      });
  },
});

export default courseSlice.reducer;
