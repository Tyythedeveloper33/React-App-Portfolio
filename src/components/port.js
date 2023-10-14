import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Logo from './Logo';

 function Port(){
    return (
        <div>
            <NavBar></NavBar>
            <p className='AM'>Portfolio</p>
            <div className="contentP">
               < div>
          <a href="#"><img src="logo1.png" alt="Logo 1" /></a>
          <a href="#"><img src="logo2.png" alt="Logo 2" /></a>
          </div>
          < div>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          </div>
          < div>
          <a href="#"><img src="logo3.png" alt="Logo 3" /></a>
          </div>
        </div>
            <Logo></Logo>
        </div>
    )
 }

 export default Port;