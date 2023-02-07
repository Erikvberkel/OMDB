import React from 'react';

import styles from './Header.module.css'

import Avatar from './Media/Avatar.png'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>OMDB</h1>
            </div>
            <div className={styles.buttons}>
                <button>Browse</button>
                <button>Search</button>
            </div>
            <div className={styles.profile}>
                <img src={Avatar} alt="Profile" />
                <p>Erik</p>
            </div>
        </div>
    );
}

export default Header