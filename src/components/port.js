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
            <a href="#"><img src="logo3.png" alt="Logo 3" className='Cp3' /></a>
             <a href="#"><img src="logo1.png" alt="Logo 1" className='Cp'  /></a>  
             <a href="#" ><img src="logo2.png" alt="Logo 2" className='Cp2' /></a> 
             
           
               < div>
               <a href="#"><img src="logo3.png" alt="Logo 3" className='Cp4'/></a>
         <a href="#"><img src="logo3.png" alt="Logo 3" className='Cp4'/></a>
         <Logo ></Logo>
          < div >
         
          
        
        
          
          </div>
        </div>
            
        </div>
    )
 }

 export default Port;