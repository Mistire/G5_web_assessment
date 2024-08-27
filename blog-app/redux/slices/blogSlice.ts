
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: any;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blogs: Blog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: BlogState = {
  blogs: [],
  status: 'idle',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch('https://a2sv-backend.onrender.com/api/blogs');
  const data = await response.json();
  return data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogSlice.reducer;
