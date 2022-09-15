import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [],
  tool: ""
}

export const cookSlice = createSlice({
  name: 'cook',
  initialState,
  reducers: {
    toggleFood: (state, action) => {
      const idx = state.food.findIndex(f => f === action.payload);
      if (idx >= 0) {
        state.food = [...state.food.slice(0, idx), ...state.food.slice(idx + 1)];
      } else {
        state.food.push(action.payload);
      }
    },
    selectTool: (state, action) => {
      if (state.tool === action.payload) {
        state.tool = "";
      } else {
        state.tool = action.payload;
      }
    },
    removeAlll: (state) => {
      state.food = [];
      state.tool = "";
    },
  }
})

export const { toggleFood, selectTool, removeAlll } = cookSlice.actions;

export default cookSlice.reducer;