import React from "react";
import * as styles from "../styles/SearchPage.module.css";
import TopSearchBar from "../components/TopSearchBar.js";
import MainDisplay from "../components/MainDisplay.js";

const SearchPage = () => {

    
    return (
        <section className={styles.container}>
            <section className={styles.topSearchBar}>
                <TopSearchBar />
            </section>
            <section className={styles.mainDisplay}>
                <MainDisplay />
            </section>
            
        </section>
    
    )
};

export default SearchPage;


