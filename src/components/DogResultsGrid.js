import React from "react";
import DogCard from "./DogCard";
import * as styles from "../styles/DogResultsGrid.module.css";

const DogResultsGrid = () => {
    const mockData = [
        {
            id: "1",
            img: "https://images.dog.ceo/breeds/spitz-japanese/beet-001.jpg",
            name: "Beet",
            age: 4,
            zip_code: 34723,
            breed: "Spitz (Japanese)"
        },
        {
            id: "2",
            img: "https://images.dog.ceo/breeds/labradoodle/Cali.jpg",
            name: "Cali",
            age: 2,
            zip_code: 29411,
            breed: "Labradoodle"
        }
    ];

    return (
        <section className={styles.container}>
            {mockData.map((dog) => (
                <DogCard key={dog.id} imageUrl={dog.img} name={dog.name} age={dog.age} zip_code={dog.zip_code} breed={dog.breed}/>
            ))}
        </section>
    );
};

export default DogResultsGrid;