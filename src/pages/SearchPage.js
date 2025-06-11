import React from "react";
import * as styles from "../styles/SearchPage.module.css";
import TopSearchBar from "../components/TopSearchBar.js";
import MainDisplay from "../components/MainDisplay.js";
import { FilterProvider } from "../context/FilterContext";

const SearchPage = () => {
    return (
        <section className={styles.container}>
            <section className={styles.dividingContainer}>
                <section className={styles.topSearchBar}>
                    <TopSearchBar />
                </section>
            </section>
            <section className={styles.mainDisplay}>
                <FilterProvider>
                    <MainDisplay />
                </FilterProvider>
            </section>
            
        </section>
    
    )
};

export default SearchPage;


