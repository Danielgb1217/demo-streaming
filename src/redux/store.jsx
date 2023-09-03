import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const rootReducer = {
  movie: movieReducer,  //ALmacena la pelicula seleccionada para ser mostrada en el popup
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
