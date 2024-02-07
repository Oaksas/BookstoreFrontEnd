import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsAPI } from "../services/cryptoNewsAPI";
import { cryptoAPI } from "../services/cryptoAPI";
export default configureStore({
    reducer: { [cryptoAPI.reducerPath]: cryptoAPI.reducer, [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoAPI.middleware, cryptoNewsAPI.middleware
        ),
});