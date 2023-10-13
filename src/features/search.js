import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
}

export const search = createSlice({

  name: "search",
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

// console.log(modal);
export const { searchTerm } = search.actions;
export default search.reducer;