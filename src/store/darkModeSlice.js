import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    mode: 'dark'
  },
  reducers: {
    toggleMode: (state, action) => {
      state.mode = action.payload
    }
  }
});

export const { toggleMode } = darkModeSlice.actions;
export const getMode = (state) => state.darkMode.mode;

export default darkModeSlice.reducer;