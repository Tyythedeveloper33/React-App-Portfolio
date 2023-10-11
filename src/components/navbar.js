import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
 import HelloReact from './HelloReact';
 import ContactMe from './contact';
 import Resume from './resume';
import Port from './port';
 import { Link } from 'react-router-dom';
// import NavTabs from './NavTabs';
 

const owner ={
  title: "Tyler's Portfolio"
  }
  
// TODO: Add a comment explaining what a react component is
function NavBar() {
    // TODO: You can define 'owner' here or pass it as a prop
    // const [currentPage, setCurrentPage] = useState('about');

    // // TODO: Add a comment describing the functionality of this method
    // const renderPage = () => {
    //   if (currentPage === 'portfolio') {
    //     return <Port />;
    //   }
    //   if (currentPage === 'about') {
    //     return <HelloReact />;
    //   }
    //   if (currentPage === 'contact') {
    //     return <ContactMe />;
    //   }
    //   if (currentPage === 'resume') {
    //       return <Resume />;
    //     }
     
    // };
  
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
            <nav>
                <div>
                 <h1>{owner.title}</h1>
                </div>
              <ul>
                <li>
                  <Link to="/">About Me</Link>
                </li>
                <li>
                  <Link to="/portfolio">porfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
              </ul>
            </nav>
          );
        }
  
  
  export default NavBar;
  