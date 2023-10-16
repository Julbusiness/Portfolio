import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const slide = createSlice({
	name: "slide",
	initialState,
	reducers: {
		slideNumber: (state, action) => {
			state.value = action.payload;
		},
		prevSlide: (state, action) => {
			state.value === 0 ? (state.value = action.payload - 1) : state.value--;
		},
		nextSlide: (state, action) => {
			state.value === action.payload - 1 ? (state.value = 0) : state.value++;
		},
	},
});

// console.log(modal);
export const { slideNumber, prevSlide, nextSlide } = slide.actions;
export default slide.reducer;
