// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import blogDetailReducer from './slices/blogDetailSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogDetail: blogDetailReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
