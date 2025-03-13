import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import {
      persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage for web

// Persist configuration
const persistConfig = {
      key: "root",
      version: 1,
      storage,
};

// Combine reducers
const rootReducer = combineReducers({
      auth: authSlice,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }),
});

export const persistor = persistStore(store);
export default store;
