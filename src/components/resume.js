import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Navbar';
import Logo from './Logo';
function Resume(){
    
    return(
        <div>
        <NavBar></NavBar>
        <p className='AM'>Resume</p>
        <Logo></Logo>
    </div>
    )
}
export default Resume;