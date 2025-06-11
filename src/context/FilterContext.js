import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext(); // created a shared store for the SearchPage's Main Display

export const FilterProvider = ({ children }) => {
    const [selectedBreed, setSelectedBreed] = useState([]);
    const [selectedAge, setSelectedAge] = useState([]);
    const [ageRange, setAgeRange] = useState({ min: 0, max: 20 });
    const [sliderSelected, setSliderSelected] = useState(false);
    const [sortOrder, setSortOrder] = useState("asc");

    const clearFilters = () => {
        setSelectedBreed([]);
        setSelectedAge([]);
        setSliderSelected(false);
        setAgeRange({ min: 0, max: 20 });
    };

    return (
        <FilterContext.Provider
            value={{
                selectedBreed,
                setSelectedBreed,
                selectedAge,
                setSelectedAge,
                ageRange,
                setAgeRange,
                sliderSelected,
                setSliderSelected,
                sortOrder,
                setSortOrder,
                clearFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => useContext(FilterContext); // allows us to unpack slices of the state

