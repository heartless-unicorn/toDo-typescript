import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { NamedRepo, Repo } from "../helpers/interfaces";

const initialState = {
  repos: {},
};
// type key = keyof NamedRepo;
const ActionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addRepo(state, action: PayloadAction<NamedRepo>) {
      const repoName = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      state.repos = {
        ...state.repos,
        [repoName]: value,
      };
    },
  },
});
export const { addRepo } = ActionSlice.actions;
export const selectActions = (state: any) => state.repos;
export default ActionSlice.reducer;
