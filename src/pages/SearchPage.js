import React, { useState } from "react";
import * as styles from "../styles/SearchPage.module.css";
import gridIcon from "../assets/grid.png";
import listIcon from "../assets/list.png";

const SearchPage = () => {
    const name = "Test";
    
    const [breed, setBreed] = useState("");
    const [viewMode, setViewMode] = useState("grid");

    const handleChange = (e) => setBreed(e.target.value);
    
    return (
        <section className={styles.container}>
            <section className={styles.topSearchBar}>
                <section className={styles.greetingSection}>
                    <h2>Hi, {name}</h2>
                </section>
                <section className={styles.searchSection}>
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
            </section>
        </section>
    
    )
};

export default SearchPage;


