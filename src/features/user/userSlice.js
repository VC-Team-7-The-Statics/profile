import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  company: "",
  location: {},
  image: "",
  price: "",
  likes: [],
  liked: [],
  match: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (
      state,
      {
        payload: {
          id,
          name,
          email,
          company,
          image,
          likes = [],
          match = [],
          requests = [],
        },
      }
    ) => {
      state.id = id;
      state.name = name;
      state.email = email;
      state.company = company;
      state.image = image;
      state.likes = likes;
      state.match = match;
      state.requests = requests;
    },
  },
});

export const selectUser = (state) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
