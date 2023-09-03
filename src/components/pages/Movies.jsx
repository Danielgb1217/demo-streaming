import Movie from './Movie'
import React from 'react'

const Movies = () => {
  return (
    <div>
      {/* atributo enviado para discriminar el typo (pelicula/serie) en el componente que ejecuta los filtros de data (Movie) */}
      <Movie type={'movie'}/>
    </div>
  )
}

export default Movies