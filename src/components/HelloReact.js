import React from 'react';
import contactMe from './contact';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const owner ={
  title: "Tyler's Portfolio"
  }
  
// TODO: Add a comment explaining what a react component is
function HelloReact()  {
  // const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (
      <div>
        <header>
          <Nav className='NavBar'>
            <div className='owner'>{owner.title}</div>
            <div>
              <a href="/">About Me</a>
              <a href="#">Portfolio</a>

             
               <a href= "/contact"> Contact</a>
              
              <a href="#">Resume</a>
            </div>
          </Nav>
        </header>
  
        <div className="content">
          <p>Hi my name is</p>
          <h1>Tyler Webster</h1>
          <h2>I'm a Full Stack Developer.</h2><hr></hr>
          <p2>I'm a full-stack developer specializing in building (and occasionally designing) exeptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p2>
        <Button className='button'> view work</Button>
        </div>
        
  
        <div className="footer">
          <a href="#"><img src="logo1.png" alt="Logo 1" /></a>
          <a href="#"><img src="logo2.png" alt="Logo 2" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
        </div>
      </div>
    );
  }
  

  


export default HelloReact;
