import { configureStore } from "@reduxjs/toolkit";
import { bookAPI } from "../services/bookStoreApi";

export const store = configureStore({
    reducer: {
        [bookAPI.reducerPath]: bookAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
