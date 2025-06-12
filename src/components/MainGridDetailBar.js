import React from 'react';
import { useFilters } from '../context/FilterContext';
import * as styles from "../styles/MainGridDetailBar.module.css";
import refresh from "../assets/refresh.png";
import longUpArrow from "../assets/skinnylongarrow.png";

const MainGridDetailBar = () => {
  const {
    selectedBreed,
    selectedAge,
    ageRange,
    setSliderSelected,
    setSelectedBreed,
    setSelectedAge,
    sliderSelected,
    sortOrder,
    setSortOrder,
    clearFilters
  } = useFilters();

  
  const toggleSort = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };
  
  const removeBreed = (breed) => {
    setSelectedBreed(prev => prev.filter(b => b !== breed));
  };
  
  const removeAge = (age) => {
    setSelectedAge(prev => prev.filter(b => b !== age));
  };

  const clearAge = () => {
    setSliderSelected(false);
  };
  
  return (
    <section className={styles.container}>
        {/* result count */}
        <section className={styles.resultCount}>
            <h2>{3 || results.length} Results</h2>
        </section>

        {/* active filters */}
        <section className={styles.activeFilters}>
            {/* breed filters */}
            {selectedBreed.map(breed => (
                <span key={breed} className={styles.filterPill}>
                    {breed}
                    <button onClick={() => removeBreed(breed)}>×</button>
                </span>
            ))}

            {/* age filters */}
            {selectedAge.length > 0 &&
                selectedAge.map(age => (
                <span key={age} className={styles.filterPill}>
                    {age}
                    <button onClick={() => removeAge(age)}>×</button>
                </span>
                ))}

            {/* slider range (only if no selectedAge and slider is active) */}
            {selectedAge.length === 0 && sliderSelected && (
                <span className={styles.filterPill}>
                    {ageRange.min} – {ageRange.max} yrs
                    <button onClick={clearAge}>×</button>
                </span>
            )}
        </section>

        {/* actions */}
        <section className={styles.filterActions}>
            <button onClick={clearFilters} className={styles.clearButtonGroup}>Clear Filters
                <img src={refresh} className={styles.clearButton} />
            </button>
            <button onClick={toggleSort} className={styles.sortButton}>
            Sort {sortOrder === 'asc' ? <img src={longUpArrow} className={styles.arrows} /> : <img src={longUpArrow} className={`${styles.arrows} ${styles.down}`} />}
            </button>
        </section>
    </section>

  );
};

export default MainGridDetailBar;