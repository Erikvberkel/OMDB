import React from 'react';

import symbol from './Media/loading-gif.gif'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.load}>
            <img src={symbol} alt="Loading" />
        </div>
    );
}

export default Loading