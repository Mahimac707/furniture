import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice';
import photoReducer from './features/photoSlice';

const store = configureStore({
    reducer: {
        search:searchReducer,
        photo: photoReducer,
    },
})

export default store