import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'About') {
            return <About />
        }

        return <About />;
        // return <Portfolio />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="portfolioContainer">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};