import React, {useState, useRef} from 'react';

import Movie from './Movie.js'

import styles from './Roll.module.css'

function Roll(props) {

    const [offset, setOffset] = useState(0)

    const caroussel = useRef()

    function slideRight() {
        if(offset === 0) {
            caroussel.current.style = 'right: 0px'
        }
        const moviesInSight =
            Math.floor(caroussel.current.clientWidth / 160);
        const offsetSpace = ((moviesInSight - 1) * 160) + ((moviesInSight -1) * 4)
        if ((offset + offsetSpace) <= (caroussel.current.scrollWidth - offsetSpace)){
            caroussel.current.style = `right: ${offset + offsetSpace}px`
            setOffset(offset + offsetSpace)
            return
        }
        caroussel.current.style = `right: ${caroussel.current.scrollWidth - caroussel.current.clientWidth}px`;
        setOffset(
            caroussel.current.scrollWidth - caroussel.current.clientWidth
        );
    }

    function slideLeft() {
        const moviesInSight = Math.floor(caroussel.current.clientWidth / 160);
        const offsetSpace = (moviesInSight - 1) * 160 + (moviesInSight - 1) * 4;
        if(offsetSpace <= offset) {
            caroussel.current.style = `right: ${offset - offsetSpace}px`;
            setOffset(offset - offsetSpace);
            return
        }
        caroussel.current.style = 'right: 0'
        setOffset(0)
    }
        
    return (
        <>
            <div className={styles.genre}><h1>{props.rollData.genre}</h1></div>
            <div className={styles.caroussel}>
                <div className={styles.roll} ref={caroussel}>
                    {props.rollData.titles.map((movie) => {
                        return <Movie key={movie.Title} movieData={movie} />;
                    })}
                </div>
                <button
                    className={`${styles.button} ${styles.buttonLeft}`}
                    onClick={slideLeft}
                >
                    &#8656;
                </button>
                <button
                    className={`${styles.button} ${styles.buttonRight}`}
                    onClick={slideRight}
                >
                    &#8658;
                </button>
            </div>
        </>
    );
}

export default Roll