import { configureStore } from "@reduxjs/toolkit";
import modal from "./features/modal";
import slide from "./features/slide";

export const store = configureStore({
  reducer: {
    modal,
    slide
  },
});