import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
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
                 <Link to="/" id="abMe">About Me</Link>
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
  