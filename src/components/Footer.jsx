import React from 'react'
import styles from './footer.module.css'
import facebook from './../assets/social/facebook-white.svg';
import instagram from './../assets/social/instagram-white.svg';
import twitter from './../assets/social/twitter-white.svg';
import appStore from './../assets/store/app-store.svg';
import playStore from './../assets/store/play-store.svg';
import windowStore from './../assets/store/windows-store.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <p>HOME | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
                <p>Copyright © 2023 DEMO Streaming All Rights Reserved.</p>
                <div className={styles.networks}>
                    <div>
                        <img src={facebook} alt='Logo de Facebook' className={styles.socialFacebook} />
                        <img src={instagram} alt='Logo de instagram' className={styles.social} />
                        <img src={twitter} alt='Logo de twitter' className={styles.social} />
                    </div>
                    <div>
                        <img src={appStore} alt='Logo de App Store' className={styles.store} />
                        <img src={playStore} alt='Logo de Play Store' className={styles.store} />
                        <img src={windowStore} alt='Logo de Windows Store' className={styles.storeWindows} />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer