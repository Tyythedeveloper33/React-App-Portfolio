import React from 'react';
import './style.css';
import NavBar from './Navbar';
import Logo from './Logo';
// TODO: Add a comment explaining what a react component is
function ContactMe() {
  // const text = 'some text';

//   const handleChange = () => {
    
//   }
//   const handleSubmit = () => {

//   }
  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (
      <div>
        <NavBar></NavBar>
  
        <div className="contentC">
         <h1 className='contactMe'> Contact Me </h1>
        
       
      <div className="container">
        <form >
        {/* onSubmit={this.handleSubmit}> */}

          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
            //   value={name}
            //   onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={email}
            //   onChange={this.handleChange}
              required
            />
          </div>
<hr></hr>
          <div className="form-group">
            <label htmlFor="message"> -- Text:</label>
            <textarea
              id="message"
              name="message"
            //   value={message}
            //   onChange={this.handleChange}
              rows="4"
              required
            />
           
          </div>

          {/* <button type="submit">Submit</button> */}
      
        </form> 
        </div>
      </div>
      <Logo/>
      </div>
    );
  }
  

  


export default ContactMe;
