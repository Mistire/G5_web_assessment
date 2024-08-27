import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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
  error: string | null; // Added error state
}

const initialState: BlogState = {
  blogs: [],
  status: 'idle',
  error: null,
};

// Define a type for the error
interface FetchBlogsError {
  message: string;
}

export const fetchBlogs = createAsyncThunk<Blog[], void, { rejectValue: FetchBlogsError }>(
  'blogs/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://a2sv-backend.onrender.com/api/blogs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Reset error
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'An unknown error occurred'; // Handle the error payload
      });
  },
});

export default blogSlice.reducer;
