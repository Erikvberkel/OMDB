import React, {useState} from 'react';

import Modal from './Modal';

import styles from './Movie.module.css'

function Movie(props) {

    const [showModal, setShowModal] = useState(false)

    function showInfo() {
        setShowModal(true)
    }

    function closeInfo(e) {
        e.stopPropagation();
        setShowModal(false)
    }

    return (
        <>
            <div className={styles.poster}>
                <img onClick={showInfo} src={props.movieData.Poster} alt="Poster" />
            </div>
            {showModal ? <Modal close={closeInfo} movieData={props.movieData} /> : null}
        </>
    );
}

export default Movie