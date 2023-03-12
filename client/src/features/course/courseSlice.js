import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import courseService from './courseService.js';

const initialState = {
  courses: [],
  isSuccesfull: false,
  isError: false,
  isLoading: false,
  message: '',
};

const getCourses = createAsyncThunk('course/getCourses', async (temp, thunkApi) => {
  try {
    return await courseService.getCourses();
  } catch (err) {
    const message = 'test';

    return thunkApi.rejectWithValue(message);
  }
});

const findCourse = createAsyncThunk('course/findCourse', async (courseId, thunkApi) => {
  try {
    return await courseService.findCourse(courseId);
  } catch (err) {
    const message = 'test';

    return thunkApi.rejectWithValue(message);
  }
});

export { getCourses, findCourse };

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = [...action.payload];
        state.isSuccesfull = true;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.courses = [];
        state.message = action.payload;
      })
      .addCase(findCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
        state.isSuccesfull = true;
      })
      .addCase(findCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.courses = [];
        state.message = action.payload;
      });
  },
});

export const { reset } = courseSlice.actions;

export default courseSlice.reducer;
