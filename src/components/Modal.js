import React from 'react';

import styles from './Modal.module.css'

function Modal(props) {

    function stopBubbling(e) {
        e.stopPropagation();
    }

    return (
        <div onClick={props.close} className={styles.modal}>
            <div onClick={stopBubbling} className={styles.movie}>
                <div className={styles.title}>
                    <h1>{props.movieData.Title}</h1>
                    <div className={styles.poster}>
                        <img className={styles.img} src={props.movieData.Poster} alt={`Poster ${props.movieData.Title}`} />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.meta}>
                        <span>{props.movieData.Rating} &#9733;</span>
                        <span>{props.movieData.Year}</span>
                        <span>{props.movieData.Runtime}</span>
                    </div>
                    <div className={styles.plot}>
                        <p>{props.movieData.Plot}</p>
                    </div>
                    <div className={styles.actors}>
                        <p>{props.movieData.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal