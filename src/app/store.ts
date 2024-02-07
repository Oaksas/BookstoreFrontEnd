import { configureStore } from "@reduxjs/toolkit";
import { bookAPI } from "../services/bookStoreApi";
import { userAPI } from "../services/usersApi";

export const store = configureStore({
    reducer: {
        [bookAPI.reducerPath]: bookAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookAPI.middleware).concat(userAPI.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
