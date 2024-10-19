import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommentaires = createAsyncThunk(
    'commentaires/fetchCommentaires',
    async () => {
        const response = await axios.get('http://localhost:8000/api/commentaires');
        return response.data;
    }
);

const commentaireSlice = createSlice({
    name: 'commentaires',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentaires.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCommentaires.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(fetchCommentaires.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        

    },
});

export default commentaireSlice.reducer;
