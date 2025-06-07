import React from "react";
import FilterSidebar from "./FilterSidebar";
import ResultsArea from "./ResultsArea";
import * as styles from "../styles/MainDisplay.module.css";

const MainDisplay = () => {
    return (
        <section className={styles.container}>
            <section className={styles.filterSideBar}>
                <FilterSidebar/>
            </section>
            <section className={styles.resultsArea}>
                <ResultsArea />
            </section>
        </section>
    )
};

export default MainDisplay;