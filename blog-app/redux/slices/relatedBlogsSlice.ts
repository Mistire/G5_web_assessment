// redux/slices/relatedBlogsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    image?: string;
  };
  createdAt: string;
  tags: string[];
  likes: number;
}

interface RelatedBlogsState {
  blogs: Blog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RelatedBlogsState = {
  blogs: [],
  status: 'idle',
  error: null,
};

export const fetchRelatedBlogs = createAsyncThunk('relatedBlogs/fetchRelatedBlogs', async (blogId: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.slice(0, 3); // Limit to 3 blogs
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
  }
});

const relatedBlogsSlice = createSlice({
  name: 'relatedBlogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default relatedBlogsSlice.reducer;
