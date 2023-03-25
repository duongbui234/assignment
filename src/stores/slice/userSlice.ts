import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/types";
import { getUsers } from "./userActions";

const initialState = {
  users: [] as UserType[],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
