import {configureStore} from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import {teacherReducer} from "./teachers/slice";
import {authReducer} from "./auth/slice";
import {themeReducer} from "./theme/slice";

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme", "colorTheme"],
};

const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    auth: authReducer,
    theme: themePersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
