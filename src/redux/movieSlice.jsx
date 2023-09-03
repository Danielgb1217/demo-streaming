import { createSlice } from "@reduxjs/toolkit";

const initialState = {  //popup movie selected
  title: "",
  description: "",
  releaseYear: "",
  images: ""
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      const { title, description, releaseYear, images } = action.payload;
      state.title = title;
      state.description = description;
      state.releaseYear = releaseYear;
      state.images = images;
    },
  }
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
