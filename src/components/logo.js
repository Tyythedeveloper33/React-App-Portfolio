import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  image from '../assets/githubicon.jpg'
import { FaBeer, FaGithubAlt , FaLinkedin, DiHeroku } from 'react-icons/fa';

function Logo(){
    return(
        
        <div className="footer">
          <a href="https://github.com/Tyythedeveloper33" className='logo' alt="Github" 
          > <FaGithubAlt className='githubLogo'/> </a>
          <a href="https://www.linkedin.com/in/tyler-webster-a2872b296/" className='logo' alt="Linkedin" 
          ><FaLinkedin className='linkedinLogo'/></a>
        </div>
    )
}

export default Logo;