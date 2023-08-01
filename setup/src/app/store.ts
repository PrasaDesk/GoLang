import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

export const store = configureStore({
    reducer: {
        authReducer: authReducer
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;