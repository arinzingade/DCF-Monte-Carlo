import { Background, Parallax } from 'react-parallax'
import '../cssForComponents/Main.css'
import {motion} from 'framer-motion'
export default function Main(){
    return(
        <>
        
        <div className='container-main'>
        <motion.div className="Main-heading-container" 
        
            initial={{
               opacity:0
            }}
            whileInView={{
                opacity:1,
                translateY:[50,0]
            }}
            transition={{  
                duration:1,
                ease:'easeIn'
            }}
            >
                <motion.div 
                animate={{scale:[1,1.5],     
                }}
                transition={{
                    duration:.5,
                    ease:'linear'
                }} 
                >
                     <p
                className='title-main'
               >YOUR  <span className='heading-colored'>TRUST</span> ,<br></br>
                OUR CORNER <span className='heading-colored'>STONE</span>
               </p>
                 </motion.div>
              
            </motion.div>
           

          
        </div>
       
        
            
        </>
    )
}