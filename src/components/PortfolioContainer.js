import { useState } from "react";

import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Work') {
            return <Work />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }

        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};