import React from 'react';
import  image from '../assets/Screenshot (9).png'
import  image1 from '../assets/Screenshot (10).png'
import  image2 from '../assets/Screenshot (11).png'
import  image3 from '../assets/Screenshot (12).png'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Logo from './Logo';
 import { FaBeer, FaGithubAlt  } from 'react-icons/fa';
 import { Button } from 'react-bootstrap';
 function Port(){
    return (
        <div>
            <NavBar></NavBar>
            <p className='AM'>Portfolio</p> 
           <div>
           <a href="https://tyythedeveloper33.github.io/test-time-improve/highscores.html"> <img src={image} alt="Coding Quiz App" className='Cp3' /></a>
           <h1 className='quiz'>Coding Quiz Live-App</h1>
           <hr/>
             <a href="https://angelinrajan.github.io/PoemApplication_GroupProject/"><img src={image1} alt="Poem Dictionary App" className='Cp3' /></a> <h1 className='quiz'>Poem Dictionary Live-App</h1>
            
              <a href="https://blogstarzz-dd5d1fbc8b57.herokuapp.com/"> <img src={image2} alt="blogPost App Repo(Blogstarzz)" className='Cp3'/></a><h1 className='quiz'>BlogPost Live-App</h1>
              </div> 
             
           
               < div>
               <div>
               <a href="https://drive.google.com/file/d/1k2_eM3CXECOZh5BhPMbSmacZc2zRtkHQ/view"><img src={image3} alt="ReadMe Generator(video)" className='Cp3' /></a><h1 className='quiz'>ReadMe Generator(video)</h1>
               <a href="https://drive.google.com/file/d/1FnfpPru3Q_4Qs7OO0ShQMiatn9PKMSdX/view"><img src={image3} alt="SQL Employee Tracker(Video)" className='Cp3'/></a> <h1 className='quiz'>SQL Employee Tracker(Video)</h1>
               <a href="https://drive.google.com/file/d/1K7AW-xhJn8mIvK7eKb4KE-e2o8WoifVd/preview"><img src={image3} alt="Social Media API(video)" className='Cp3'/></a><h1 className='quiz'>Social Media API(video)</h1>
               </div>
               <div className='repo'>
            
            <button className='Button'> <a href="https://github.com/Tyythedeveloper33/test-time-improve">Coding Quiz Repo<FaGithubAlt/></a></button> 
            <button className='Button'> <a href="https://github.com/angelinrajan/PoemApplication_GroupProject">Poem Dictionary App Repo<FaGithubAlt/></a></button> 
            <button className='Button'> <a href="https://github.com/Tyythedeveloper33/blogPost">blogPost App Repo(Blogstarzz)<FaGithubAlt/></a></button>
            <button className='Button'> <a href="https://github.com/Tyythedeveloper33/ReadMe-Generator">ReadMe Generator Repo<FaGithubAlt/></a></button> 
            <button className='Button'> <a href="https://github.com/Tyythedeveloper33/mysqlDatabase">SQL Employee Tracker Repo<FaGithubAlt/></a></button> 
            <button className='Button'> <a href="https://github.com/Tyythedeveloper33/Social-media-api">Social Media API Repo<FaGithubAlt/></a></button> 
           
            
            </div>
         <Logo ></Logo>
          < div >
         
          
        
        
          
          </div>
        </div>
            
        </div>
    )
 }

 export default Port;