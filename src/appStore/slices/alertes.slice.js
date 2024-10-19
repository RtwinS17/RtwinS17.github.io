import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the action with 
// the type as first parameters 
// and the payload as the second parameter
// TODO : Try to set the action in a special file
export const fetchAlertes = createAsyncThunk(
  'alertes/fetchAlertes',
  async () => {
    const response = await axios.get('http://localhost:8000/api/alertes');
    return response.data;
  }
);

// The slice used by redUX store
const alerteSlice = createSlice({
  name: 'alertes',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlertes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlertes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAlertes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default alerteSlice.reducer;
