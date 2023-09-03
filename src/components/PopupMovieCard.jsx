import React from 'react'
import styles from './popup.module.css'

const PopupMovieCard = ({ children, isOpen, closeModal }) => {
  return (
    <div>      
      {/* renderizado condicional a traves de las variables del hook useModal */}
      <article className={`${styles.modal} ${isOpen ? styles.isOpen : ''}`} onClick={closeModal}> 
        <div className={styles.modalContainer}>
          <button className={styles.modalClose} onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </div>
  )
}

export default PopupMovieCard