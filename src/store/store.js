import { configureStore } from '@reduxjs/toolkit';

import currentSliceReducer from './currentPostSlice';
import darkModeSliceReducer from './darkModeSlice';

import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
  reducer: {
    currentPost: currentSliceReducer,
    darkMode: darkModeSliceReducer
  }
})

export const wrapper = createWrapper(makeStore);
