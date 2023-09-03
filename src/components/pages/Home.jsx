import React, { useState } from 'react';
import styles from './home.module.css';
import placeholder from '../../assets/placeholder.png';

const Home = ({ title, setIsHome, setTitleHeader }) => {   //Componente que renderiza los compoentes de SERIES/MOVIES

    const handleClick = () => {
        setIsHome(false);
        setTitleHeader(title);      
    };

    return (
        <div className={styles.home}>
            <div className={styles.cardHome} onClick={handleClick}>
                <img src={placeholder} alt='placeholder' />
                <div className={styles.overlay}>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Home