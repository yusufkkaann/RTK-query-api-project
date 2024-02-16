import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  dataCategory: [],
  isLoading: true,
  isError: false,
  error: "",
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log("action", action);
      state.data = action.payload;
      state.isLoading = false;
    },
    setDataCategory: (state, action) => {
      state.dataCategory = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
  },
});
export const { setData, setError, setDataCategory } = stateSlice.actions;
export default stateSlice.reducer;
