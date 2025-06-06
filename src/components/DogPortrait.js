import React from "react";
import * as styles from "../styles/DogPortrait.module.css";
import dog_curious from "../assets/dog-curious-pic.jpg";
const DogPortrait = () => {
    return (
        <section className={styles.dogPortraitContainer}>
            <img src={dog_curious} alt="Curious dog locking into camera" className={styles.dogPortrait}/>
        </section>
    );
};


export default DogPortrait;