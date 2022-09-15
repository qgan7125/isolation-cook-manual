import { configureStore } from "@reduxjs/toolkit";
import cookReducer from "./cookReducer";

export const store = configureStore({
    reducer: {
        cook: cookReducer,
    },
})