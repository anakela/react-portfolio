import React from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <ul>
                <li className=''>
                    <a
                    // href='/'
                    onClick={() => handlePageChange('Home')}>
                        Home
                    </a>
                </li>
                <li className=''>
                    <a
                    // href='/about-me'
                    onClick={() => handlePageChange('About')}>
                        About Me
                    </a>
                </li>
                <li className=''>
                    <a
                    // href='/work'
                    onClick={() => handlePageChange('Work')}
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                        Work
                    </a>
                </li>
                <li className=''>
                    <a
                    // href='/contact-me'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </a>
                </li>
                <li className=''>
                    <a
                    // href='/resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
};