import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import todoList from "./slices/todoListSlice";

export const store = configureStore({
  reducer: {
    counter,
    todoList,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
