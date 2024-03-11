import '../cssForComponents/Navbar.css'
import {motion} from 'framer-motion'
export default function Navbar(){
    return(
        <>
            <div className="container">
                <motion.div className="logo-container">SAX-SUX PROJECT</motion.div>
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
                       <li><a  href="#">Contact</a></li> 
                       <li><a href="#">Career</a></li> 
                       <li><a href="#">About Us</a></li> 
                    </ul>
                </motion.div>
                
            </div>
        </>
    )
}