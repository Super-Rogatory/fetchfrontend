import React from 'react';
import { useFilters } from '../context/FilterContext';

const MainGridDetailBar = () => {
  const {
    selectedBreed,
    selectedAge,
    sliderRange,
    sortOrder,
    setSortOrder,
    clearFilters
  } = useFilters();
  
  return (
    <section>
      <span>{/* show selected filters */}</span>
      <button onClick={clearFilters}>Clear Filters</button>
      <button onClick={() => setSortOrder(order => order === "asc" ? "desc" : "asc")}>
        Sort {sortOrder === "asc" ? "A → Z" : "Z → A"}
      </button>
    </section>
  );
};

export default MainGridDetailBar;