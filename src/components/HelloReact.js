import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import Logo from './logo';
import { FaBeer, FaUserTie } from 'react-icons/fa';
// TODO: Add a comment explaining what a react component is
function HelloReact()  {
  // const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (
      <div>
      <NavBar></NavBar> 
      <FaUserTie className='portIcon'/> <p className='AM'>About Me</p>
  
        <div className="content">
        
          <p>Hi my name is</p>
          <h1>Tyler Webster</h1>
          <h2>I'm a Full Stack Developer.</h2><hr></hr>
          <p className='p2'>I'm a full-stack developer specializing in building (and occasionally designing) exeptional digital experiences. Currently, I'm focused on building responsive full-stack web applications. I am enthusiastic and highly skilled Full Stack Web Developer with a strong foundation in web development technologies and practices, gained through a rigorous 6-month bootcamp program at George Washington University. Proficient in creating web applications that are efficient, user-friendly, and secure. Eager to contribute to innovative web development projects in a professional setting.

</p>
        
        
        </div>
          <Link to="/portfolio"> <Button className='button'> view work </Button></Link>
          <Logo></Logo>
  
        
      </div>
    
    );
  }
  

  


export default HelloReact;
