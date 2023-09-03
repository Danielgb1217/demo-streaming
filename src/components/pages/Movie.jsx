import styles from './movies.module.css';
import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useModal } from '../../hooks/useModal';
import MovieItem from '../MovieItem';
import PopupMovieCard from '../popupMovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie } from '../../redux/movieSlice';
import Loader from '../Loader';
import Message from '../Message';

const Movie = ({ type }) => {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  const { data, error, loading } = useFetch('http://localhost:5173/src/data/sample.json'); //uso de un hook para la peticion fetch
 

  if (loading) {          //Gestion de CArga y Errores
    console.log('Cargando');
    return <Loader />;
  }
  if (error) {
    return (
      <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor={'#dc3545'} />
    );
  }
  if (!data) return null;

  //---------------------------------Reglas de filtrado-----------------------
  const series = [];
  let cont = 0;
  for (const entry of data.entries) { //Solo obtengo las primeras 20 peliculas con fecha de estreno mayor a 2010 y con el tipo especificado
    if (cont >= 20) break;
    if ((entry.releaseYear >= 2010) && (entry.programType == type)) {
      series.push(entry);
      cont++;
    } else continue;

  }

  series.sort((a, b) => a.title.localeCompare(b.title));
  console.log(series);

  const popupSelected = (el) => {   //funcion que dispara el modal y carga la pelicula seleccionada en el popup
    dispatch(setMovie(el));
    openModal();
  }


  return (
    <>
      <div className={styles.containerSeries}>
        <div className={styles.gridMovie} >
          {series && series.map((el, index) => (
            <MovieItem key={index} title={el.title} image={el.images['Poster Art'].url} onClick={() => popupSelected(el)} />
          ))}

          <PopupMovieCard isOpen={isOpenModal} closeModal={closeModal}>
            {movie && (
              <>
                <h3>Title: {movie.title}</h3>
                <p> Description: {movie.description}</p>
                <p>ReleaseYear: {movie.releaseYear}</p>
                {movie.images && <img src={movie.images['Poster Art'].url} alt='Imagen Descripcion' className={styles.movieCardDescription} />}
              </>
            )}
          </PopupMovieCard>

        </div>

      </div>

    </>
  )
}

export default Movie
