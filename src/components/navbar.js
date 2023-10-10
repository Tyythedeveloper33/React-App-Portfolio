import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
 import HelloReact from './HelloReact';
 import ContactMe from './contact';
 import Resume from './resume';
import Port from './port';
// import NavTabs from './NavTabs';
 

const owner ={
  title: "Tyler's Portfolio"
  }
  
// TODO: Add a comment explaining what a react component is
function NavBar() {
    // TODO: You can define 'owner' here or pass it as a prop
    const [currentPage, setCurrentPage] = useState('about');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'portfolio') {
        return <Port />;
      }
      if (currentPage === 'about') {
        return <HelloReact />;
      }
      if (currentPage === 'contact') {
        return <ContactMe />;
      }
      if (currentPage === 'resume') {
          return <Resume />;
        }
     
    };
  
    // const handlePageChange = (page) => setCurrentPage(page);
  
    // return (
    //   <div>
    //     {/* // TODO: Add a comment describing what we are passing as props */}
    //     <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    //     {/* // TODO: Add a comment explaining what is happening on the following line */}
    //     {renderPage()}
    //   </div>
    // );
    // }

    return (
      <div>
        <header>
          <Nav className='NavBar'>
            {/* Use curly braces to embed JavaScript expressions */}
            <div className='owner'>{owner.title}</div>
            <div>
              <a href="/about">About Me</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
              <a href="/resume">Resume</a>
            </div>
          </Nav>
        </header>
      </div>
    );
  }
  
  export default NavBar;
  