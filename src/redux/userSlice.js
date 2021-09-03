import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Rishikesh",
      email: "rishi@email.com",
    },
    fetchUsers: [],
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.fetchUsers = action.payload;
      console.log(state.fetchUsers);
    },
    updateError: (state) => {
      state.error = true;
    },
  },
});

export const { remove, update, updateStart, updateSuccess, updateError } =
  userSlice.actions;
export default userSlice.reducer;
