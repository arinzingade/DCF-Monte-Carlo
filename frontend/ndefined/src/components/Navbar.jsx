import '../cssForComponents/Navbar.css'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
export default function Navbar(){
    return(
        <>
            <div className="container">
                <motion.div className="logo-container">
                  <p className='logo-container-p'>finance</p>
                    </motion.div>
                <motion.div 
                 initial={{
                opacity:0
                 }}
                 animate={{
                    opacity:1
                 }}
                 transition={{
                    duration:3
                
                 }}
                className="list-container">
                    <ul className="navbar-list">
                       <li><Link  to="CONTACT"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={1000}>Contact</Link></li> 
                       <li><Link  to={'login'}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={1000}>Login</Link></li> 
                       <li><Link  to="ABOUT US"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-200}
      duration={1000}>About Us</Link></li> 
                    </ul>
                </motion.div>
                
            </div>
        </>
    )
}