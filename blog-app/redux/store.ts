// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import blogDetailReducer from './slices/blogDetailSlice';
import relatedBlogsReducer from './slices/relatedBlogsSlice'; // Import the relatedBlogsReducer

const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogDetail: blogDetailReducer,
    relatedBlogs: relatedBlogsReducer, // Add relatedBlogs to the store
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
