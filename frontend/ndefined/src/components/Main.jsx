import '../cssForComponents/Main.css'
import {motion} from 'framer-motion'
export default function Main(){
    return(
        <>
        <div className='container-main'>
        <motion.div className="Main-heading-container" 
        
            initial={{
                translateY:1,
               scale:0,  
               opacity:0
            }}
            animate={{
                translateY:0,
               scale:1,   
               opacity:1  
            }}
            transition={{
                delay:1,
                duration:1,
                ease:'linear'
            }}
           
            >
                <motion.div 
                animate={{scale:[1,1.8],
                    // translateX:[-50,-400]
                }}
                transition={{
                    delay:3,
                    duration:1,
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
            <motion.div
            
            initial={{
                translateY:1,
                scaleY:0, 
            }}
                animate={{
                    translateY:0,
                    scaleY:1,
                   
                }}
                transition={{
                   delay:1,
                    duration:1,
                    ease:'linear'
                    
                }}
               
                style={{transformOrigin:'bottom'}}
            className='image-container'>
                <motion.div
               
                animate={
                    {
                        scaleY:[1,1.1],
                        scaleX:[2,1],
                        opacity:0.5
                    
                        // translateX:[-50,400]
                    }
                }
                transition={{
                    delay:3,
                    duration:1,
                    ease:'linear',
                    
                }}
               
                className='image-container-2'
                >
                    
                <img style={{overflow:'hidden'}}src='background.avif' className='main-image'/>
                </motion.div>
            
            </motion.div>
          
        </div>
            
        </>
    )
}