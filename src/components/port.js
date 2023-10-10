import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import Logo from './logo';
 function Port(){
    return (
        <div>
            <NavBar></NavBar>
            {/* this is where content goes for Port */ }
            <Logo></Logo>
        </div>
    )
 }

 export default Port;