import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer, FaGithubAlt , FaLinkedin, } from 'react-icons/fa';

function Logo(){
    return(
        
        <div className="footer">
          <a href="https://github.com/Tyythedeveloper33" className='logo' alt="Github" 
          > <FaGithubAlt className='githubLogo'/> </a>
          <a href="https://www.linkedin.com/in/tyler-webster23/" className='logo' alt="Linkedin" 
          ><FaLinkedin className='linkedinLogo'/></a>
        </div>
    )
}

export default Logo;