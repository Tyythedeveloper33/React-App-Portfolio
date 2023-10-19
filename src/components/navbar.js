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
    
          return (
            <nav >
                <div >
                 <h1>{owner.title}</h1>
                </div>
                <div className='navLinks'>
                  <Link to="/">About Me</Link>
                </div>
                <div className='navLinks'>
                  <Link to="/portfolio">porfolio</Link>
                </div>
                <div className='navLinks'>
                  <Link to="/contact">Contact</Link>
                </div>
                <div className='navLinks'>
                  <Link to="/resume">Resume</Link>
                </div>
             
            </nav>
          );
        }
  
  
  export default NavBar;
  