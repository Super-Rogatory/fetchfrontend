import React from "react";
import FilterSidebar from "./FilterSidebar";
import DogResultsGrid from "./DogResultsGrid";
import * as styles from "../styles/MainDisplay.module.css";

const MainDisplay = () => {
    return (
        <section className={styles.container}>
            <section className={styles.filterSideBar}>
                <FilterSidebar/>
            </section>
            <section className={styles.resultsArea}>
                {/* <MainAreaDetailBar /> | x breeds available, current filters, clear filter */}
                <DogResultsGrid />
            </section>
        </section>
    )
};

export default MainDisplay;