import React from 'react'
import styles from './pages/movies.module.css'

const MovieItem = ({ title, image, onClick }) => {
// renderizo cada caja de pelicula con los atributos obtenidos del fetch y enviados desde componente Movie
    return (
        <div>
            <div className={styles.movieCard} onClick={onClick}>
                <img
                    src={image}
                    alt='imagen pelicula'
                    onError={(e) => {
                        e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsDEiIZiFDosgwCDUPYQUTmTQFKDX9u9DISJXLUVlttgf7MdF1HCRKa4SLYERmsXS4RU&usqp=CAU';
                        e.target.alt = 'Imagen Dañada';
                    }}
                />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default MovieItem