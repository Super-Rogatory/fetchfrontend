import React from "react";
import FilterSidebar from "./FilterSidebar";
import DogResultsGrid from "./DogResultsGrid";
import * as styles from "../styles/MainDisplay.module.css";
import MainGridDetailBar from "./MainGridDetailBar";

const MainDisplay = () => {
    return (
        <section className={styles.container}>
            <section className={styles.filterSideBar}>
                <FilterSidebar/>
            </section>
            <section className={styles.mainDetailsContainer}>
                <section className={styles.mainDetails}>
                    {/* <MainAreaDetailBar /> | x breeds available, current filters, clear filter */}
                    <MainGridDetailBar />
                    <DogResultsGrid />
                </section>
            </section>   
        </section>
    )
};

export default MainDisplay;
