import React from 'react'
import styles from './header.module.css'

function Header({title}) {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div>
                        <a href='/' className={styles.title}>DEMO Streaming</a>
                    </div>
                    <div className={styles.login}>
                        <button className={styles.loginButton}>Log in</button>
                        <button className={styles.freeButton}>Start your free trial</button>
                    </div>
                </nav>
            </header>
            <div className={styles.popular}>
                <div className={styles.popularTitles}>
                    <h2>Popular {title}</h2>
                </div>

            </div>
        </>
    );
}

export default Header