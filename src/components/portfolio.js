import React, { useState } from 'react';
import NavTabs from './NavTabs';

import About from './HelloReact';
import Resume from './resume';
import Contact from './pages/Contact';
import Port from './port';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('about');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'portfolio') {
      return <Port />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
        return <Resume />;
      }
   
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
