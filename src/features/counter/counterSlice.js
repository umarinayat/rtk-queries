import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increment
    incremented(state) {
      // its okay to do this because of immer makes its immutable
      // under the hood
      state.value++;
    },
    //amount Added
    amountAdded(state, action) {
      state.value += action.payload;
    },
    //decrement
    decremented(state) {
      state.value--;
    },
    //reset
    reset(state) {
      state.value = 0;
    },
  },
});

export const { incremented, amountAdded, decremented, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
