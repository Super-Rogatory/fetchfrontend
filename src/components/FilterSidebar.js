import React, { useCallback, useState } from "react";
import * as styles from "../styles/FilterSidebar.module.css";
import { Slider } from "./Slider";
import { useFilters } from "../context/FilterContext";
import thinCarrotArrow from "../assets/skinnycarrotarrow.png";

const FilterSidebar = () => {
    const breedList = [
        "Labrador Retriever",
        "German Shepherd",
        "Golden Retriever",
        "French Bulldog",
        "Bulldog",
        "Poodle",
    ];
      
    const ageList = [
        "Puppy (0–1)",
        "Young (1–3)",
        "Adult (4–7)",
        "Senior (8+)"
    ];

    const {
        selectedBreed,
        setSelectedBreed,
        selectedAge,
        setSelectedAge,
        ageRange,
        setAgeRange,
        sliderSelected,
        setSliderSelected
    } = useFilters();
    const [showBreeds, setShowBreeds] = useState(true);

    const SLIDER_MIN = 0;
    const SLIDER_MAX = 20;

    const toggleBreed = (breed) => {
        setSelectedBreed((prev) => 
            prev.includes(breed) ? prev.filter((b) => b !== breed) : [...prev, breed]
        );
    };

    const toggleAge = (age) => {
        setSelectedAge((prev) =>
            prev.includes(age) ? prev.filter((b) => b !== age) : [...prev, age]
        );
        setSliderSelected(false); // reset slider
    };

    const handleSliderChange = useCallback(({ min, max }) => {
        setAgeRange({ min, max });
    }, []);

    const handleSliderStop = useCallback(({ min, max }) => {
        console.log("Final value:", min, max)   
    }, []);

    return (
        <section className={styles.container}>
            <h2>Filter By</h2>
            {/* Filtering by Breed */}
            <hr />
            <section className={styles.filterNameGroup}>
                <section
                    onClick={() => setShowBreeds(!showBreeds)}
                    style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Breed</h3>
                    <span>{showBreeds ? <img src={thinCarrotArrow} className={`${styles.arrow} ${styles.up}`} /> : <img src={thinCarrotArrow} className={styles.arrow} />}</span>
                </section>
                { showBreeds && 
                breedList.map((breed) => (
                    <section className={styles.buttonGroup}>
                        <button
                            key={breed}
                            onClick={() => toggleBreed(breed)}
                            className={`${styles.filterButton} ${
                                selectedBreed.includes(breed) ? styles.selected : ""
                            }`}
                            aria-pressed={selectedAge.includes((breed))}
                            >
                            <span className={styles.checkmark}>
                                {selectedBreed.includes(breed) && "✓"}
                            </span>
                        </button>
                        <span>{breed}</span>
                    </section>
                ))}
            </section>
            {/* Age Group Filtering */}
            <hr />
            <section className={styles.filterAgeGroup}>
                <h3>Age Group</h3>
                {ageList.map((age) => (
                    <section className={styles.buttonGroup}>
                        <button
                            key={age}
                            onClick={() => toggleAge(age)}
                            className={`${styles.filterButton} ${
                                selectedAge.includes(age) ? styles.selected : ""
                            }`}
                            aria-pressed={selectedAge.includes((age))}
                            >
                            <span className={styles.checkmark}>
                                {selectedAge.includes(age) && "✓"}
                            </span>
                        </button>
                        <span>{age}</span>
                    </section>
                ))}
                {/* Min-Max Slider */}
                <section className={styles.buttonGroup}>
                    <button
                        className={`${styles.filterButton} ${sliderSelected ? styles.selected : ""}`}
                        onClick={() => {
                            setSelectedAge([]); // clear all other age buttons
                            setSliderSelected(true);
                        }}
                    >
                        <span className={styles.checkmark}>
                            {sliderSelected && "✓"}
                        </span>
                    </button>
                    <span>0–20 years old</span>
                </section>

                {sliderSelected && (
                    <section className={styles.sliderWrapper}>
                        <Slider
                            min={ageRange.min}
                            max={ageRange.max}
                            minRange={SLIDER_MIN}
                            maxRange={SLIDER_MAX}
                            onChange={handleSliderChange}
                            onStop={handleSliderStop}
                            styleConfig={{
                                sliderTrack: {
                                    colors: {
                                        inRange: "#e22e2e",
                                        outRange: "#f1e4e4"
                                    }
                                },
                                sliderThumb: {
                                    colors: {
                                        fill: "#e22e2e",
                                        outline: "#e22e2e"
                                    }
                                }
                            }}
                        />
                        <section className={styles.rangeDisplay}>
                            <span>{ageRange.min} yrs</span> – <span>{ageRange.max} yrs</span>
                        </section>
                    </section>
                )}
                <hr />
                <section className={styles.filterLocationGroup}>
                    {/* TODO */}
                    <h3>Location Group</h3>
                </section>
            </section>
        </section>
    );
};

export default FilterSidebar;