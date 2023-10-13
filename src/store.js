import { configureStore } from "@reduxjs/toolkit";
import modal from "./features/modal";
import slide from "./features/slide";
import search from "./features/search";

export const store = configureStore({
  reducer: {
    modal,
    slide,
    search
  },
});