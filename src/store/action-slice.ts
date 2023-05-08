import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Repo {
  todos: Array<Object>;
  inProgress: Array<Object>;
  done: Array<Object>;
}
const initialState = {
  repos: {},
};

const ActionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addRepo(state, action: PayloadAction<String>) {},
    // addCity(state, action: PayloadAction<String>) {
    //   state.actions.push(action.payload);
    // },
  },
});
// export const { addCity, removeCity } = ActionSlice.actions;
export const selectActions = (state: any) => state.actions;
export default ActionSlice.reducer;
