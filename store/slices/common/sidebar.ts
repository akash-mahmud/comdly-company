import { createSlice } from "@reduxjs/toolkit";

const initialState = {
sidebarOpen:false
};
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    sidebarOpen(state) {
      state.sidebarOpen = true;
    },
    sidebarClose(state) {
      state.sidebarOpen = false;
    },
  },
});

export const { sidebarClose, sidebarOpen } = commonSlice.actions;

export default commonSlice.reducer;