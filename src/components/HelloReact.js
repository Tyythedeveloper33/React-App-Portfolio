import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import Logo from './logo';

// TODO: Add a comment explaining what a react component is
function HelloReact()  {
  // const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (
      <div>
      <NavBar></NavBar>
  
        <div className="content">
          <p>Hi my name is</p>
          <h1>Tyler Webster</h1>
          <h2>I'm a Full Stack Developer.</h2><hr></hr>
          <p2>I'm a full-stack developer specializing in building (and occasionally designing) exeptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p2>
          <Link to="/portfolio"> <Button className='button'> view work </Button></Link>
        
        </div>
          <Logo></Logo>
  
        
      </div>
    
    );
  }
  

  


export default HelloReact;
