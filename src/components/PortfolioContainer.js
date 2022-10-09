import React, { useState } from "react";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        }

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }

        // return <About />;
        return <Work />;
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