import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      name: "Ali",
      age: 30,
    },
  ],
  userListName: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Update the user data in the state with the payload
      state.userData.push(action.payload);
      //state.userData = action.payload;
    },
    AddUserListName: (state, action) => {
      // Update the user data in the state with the payload

      state.userListName = action.payload;
    },
    removeUserListName: (state, action) => {
      // Update the user data in the state with the payload

      state.userListName = "";
    },
    resetAllVales: () => {
      (state.userData = [{}]), (state.userListName = "");
    },
  },
});

export const { addUser, AddUserListName, removeUserListName } =
  userSlice.actions;

export default userSlice.reducer;
