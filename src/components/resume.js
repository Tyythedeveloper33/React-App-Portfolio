import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import NavBar from './Navbar';
import Logo from './Logo';
function Resume(){
    
    return(
        <div>
        <NavBar></NavBar>
        <p className='AM'>Resume</p>
        <div className='contentR'>
            <h2>Experience</h2>
            <hr/>
            <h1> George Washington University</h1> <p>(Bootcamp: May 2023 -Nov 2023)</p>
        
               <h1>Key Learning Areas:</h1>
               <p className='key'>
                <hr/>
* HTML & CSS
* Bootstrap
* JavaScript
* Web APIs
* Third-Party APIs
</p>
<p className='key'>
* Server-Side APIs
* Node.js
* Object-Oriented Programming (OOP)
* Express.js
* MySQL
</p>
<p className='key'>
* Model-View-Controller (MVC)
* Full Stack Application Development
* MongoDB
* React.js
* MERN Stack Application Development</p>

        </div>
        <a href="https://docs.google.com/document/d/e/2PACX-1vRmK0wQsxknuUJjfJjXy7-PXZedK-maLgFavkiSc7pAIznwpewDKUz94BfmgdJqS06fqd5udoHmgDTc/pub"> <Button className='buttonR'>Download Resume</Button></a>
         <p className='foot'>To download resume highlight picture, 2 finger click to open up, then click save image as</p>
        <Logo></Logo>
    </div>
    )
}
export default Resume;