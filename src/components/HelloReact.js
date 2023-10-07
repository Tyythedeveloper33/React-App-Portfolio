import React from 'react';
import './style.css';
// TODO: Add a comment explaining what a react component is
function HelloReact() {
  // const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (
      <div>
        <header>
          <nav>
            <div>TYLER</div>
            <div>
              <a href="#">About Me</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
              <a href="#">Resume</a>
            </div>
          </nav>
        </header>
  
        <div className="content">
          {"this is my portfolio page" }
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
