import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import SearchPage from "./pages/SearchPage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />} /> {/* default route */}
                    <Route path="/search" element={<SearchPage />} /> {/* after login */}
                    <Route path="*" element={<NoPage />} /> {/* catch all, no page handler */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;