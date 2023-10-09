import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
// TODO: Add a comment explaining what a react component is
function contactMe() {
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
          {"Contact Me" }
        </div>
       
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
            //   value={name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
            //   value={message}
              onChange={this.handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
   
  
  
        <div className="footer">
          <a href="#"><img src="logo1.png" alt="Logo 1" /></a>
          <a href="#"><img src="logo2.png" alt="Logo 2" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
        </div>
      </div>
    );
  }
  

  


export default contactMe;
