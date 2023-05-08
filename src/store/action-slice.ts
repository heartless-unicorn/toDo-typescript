import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  todos: Array<Object>;
  inProgress: Array<Object>;
  done: Array<Object>;
}
const initialState = {};

const ActionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    // addCity(state, action: PayloadAction<String>) {
    //   state.actions.push(action.payload);
    // },
  },
});
// export const { addCity, removeCity } = ActionSlice.actions;
export const selectActions = (state: any) => state.actions;
export default ActionSlice.reducer;
