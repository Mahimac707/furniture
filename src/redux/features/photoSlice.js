import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchPhotos } from "../../services/contentapi";

export const fetchPhotosByCategory = createAsyncThunk(
    'photos/fetchByCategory',
    async (query, { rejectWithValue }) => {
        try {
            const searchQuery = query === 'diningTable' ? 'dining table' : query;
            const results = await searchPhotos(searchQuery);
            return { query, results: results.slice(0,8) };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        categories: {
            sofa: [],
            kitchen: [],
            bed: [],
            diningTable: [],
            closet: [],
        },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotosByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPhotosByCategory.fulfilled, (state, action) => {
                state.loading = false;
                const { query, results } = action.payload;
                state.categories[query] = results;
            })
            .addCase(fetchPhotosByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default photoSlice.reducer;