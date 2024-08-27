import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface BlogDetail {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
  };
  tags: string[];
  createdAt: string;
}

interface BlogDetailState {
  blog: BlogDetail | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: BlogDetailState = {
  blog: null,
  status: 'idle',
};

export const fetchBlogDetail = createAsyncThunk(
  'blogDetail/fetchBlogDetail',
  async (blogId: string) => {
    const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${blogId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog details');
    }
    const data = await response.json();
    return data;
  }
);

const blogDetailSlice = createSlice({
  name: 'blogDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(fetchBlogDetail.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogDetailSlice.reducer;
