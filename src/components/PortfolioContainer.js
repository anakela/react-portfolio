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

        if (currentPage === 'Work') {
            return <Work />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }

        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* <Header /> */}
            {renderPage()}
            <Footer />
        </div>
    );
};