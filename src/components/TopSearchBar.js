import React, { useState } from "react";
import * as styles from "../styles/TopSearchBar.module.css";
import gridIcon from "../assets/grid.png";
import listIcon from "../assets/list.png";
import searchIcon from "../assets/search-icon.png";

const TopSearchBar = () => {
    const name = "Test";
    
    const [breed, setBreed] = useState("");
    const [viewMode, setViewMode] = useState("grid");

    const handleChange = (e) => setBreed(e.target.value);

    return (
        <>
            <section className={styles.greetingSection}>
                <h2>Hi, {name}</h2>
            </section>
            <section className={styles.searchSection}>
                <section className={styles.searchIconContainer}>
                    <img
                        src={searchIcon}
                        className={styles.searchIcon}
                        aria-label="Search Icon"
                    />
                </section>
                <input
                    type="text"
                    name="breed"
                    placeholder="Search dog breed..."
                    className={styles.searchInput}
                    onChange={handleChange}
                    value={breed}
                />
            </section>
            <section className={styles.viewToggleSection}>
                <section className={styles.viewIcons}>
                    <img
                        src={listIcon}
                        className={`${styles.icon} ${viewMode === "list" ? styles.activeIcon : styles.inactiveIcon}`}
                        onClick={() => setViewMode("list")}
                        aria-label="List View"
                    />
                    <img 
                        src={gridIcon}
                        className={`${styles.icon} ${viewMode === "grid" ? styles.activeIcon : styles.inactiveIcon}`}
                        onClick={() => setViewMode("grid")}
                        aria-label="Grid View"
                    />
                </section>
            </section>
        </>
    )
};

export default TopSearchBar;