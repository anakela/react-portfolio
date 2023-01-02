import React, { useState } from "react";

import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === '/') {
            return <About />
        }
        if (currentPage === '/resume') {
            return <Resume />;
        }
        if (currentPage === '/portfolio') {
            return <Portfolio />;
        }
        if (currentPage === '/contact') {
            return <Contact />;
        }
        // return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="portfolio-container">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};