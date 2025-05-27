import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  firstname: string;
  lastname: string;
  age: number;
};

const initialState: UserState = {
  firstname: "John",
  lastname: "Smith",
  age: 30,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
  },
});

export const { incrementAge, setFirstname, setLastname } = UserSlice.actions;

export default UserSlice.reducer;
