import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('about')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
         resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
