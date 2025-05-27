import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  firstname: string;
  lastname: string;
  age: number;
};

const initialState: UserState = {
  firstname: "",
  lastname: "",
  age: 0,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
  },
});

export const { incrementAge } = UserSlice.actions;

export default UserSlice.reducer;
