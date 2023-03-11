import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/course/courseSlice';

export default configureStore({
  reducer: {
    course: courseReducer,
  },
});
