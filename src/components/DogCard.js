import React from "react";
import pin from "../assets/pin.png";
import * as styles from "../styles/DogCard.module.css";

const DogCard = ({ imageUrl, name, age, zip_code, breed }) => {
    // interface Dog {
    //     id: string
    //     img: string
    //     name: string
    //     age: number
    //     zip_code: string
    //     breed: string
    // }

    return (
        <section className={styles.container}>
            <section className={styles.imageWrapper}>
                <img src={imageUrl} alt={name} className={styles.mainCardImage} />
                <section className={styles.zipOverlay}>
                    <img src={pin} className={styles.pinImage} /> {zip_code}
                </section>
            </section>
            <section className={styles.details}>
                <p className={styles.name}>{name}</p>
                <p className={styles.breed}>Breed: {breed}</p>
                <p className={styles.age}>Age: {age}</p>
            </section>
        </section>
    );

}

export default DogCard;