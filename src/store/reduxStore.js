import { configureStore } from "@reduxjs/toolkit";
import { catApiSlice } from "./catApi/catApiSlicer";
import stateSlicer from "./stateSlice/stateSlicer";

export const store = configureStore({
  reducer: {
    [catApiSlice.reducerPath]: catApiSlice.reducer,
    state: stateSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApiSlice.middleware), // bilgilerin cache de tutulmasını sağlar
});
