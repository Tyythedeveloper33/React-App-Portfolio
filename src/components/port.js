import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import Logo from './logo';
 function Port(){
    return (
        <div>
            <NavBar></NavBar>
            <div className="contentP">
          <a href="#"><img src="logo1.png" alt="Logo 1" /></a>
          <a href="#"><img src="logo2.png" alt="Logo 2" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          
        </div>
            <Logo></Logo>
        </div>
    )
 }

 export default Port;