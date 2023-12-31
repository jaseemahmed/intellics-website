import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerState: {
    drawerOpen: false,
  },
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    handleDrawer: (state, action) => {
      state.headerState.drawerOpen = action.payload;
    },
  },
});

export const { handleDrawer } = HeaderSlice.actions;

export default HeaderSlice.reducer;
