import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchConcerts = createAsyncThunk(
  'concerts/fetchConcerts',
  async () => {
    const response = await axios.get('http://localhost:8000/api/concerts');
    return response.data;
  }
);

const concertsSlice = createSlice({
  name: 'concerts',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConcerts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConcerts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchConcerts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default concertsSlice.reducer;
