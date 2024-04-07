import '../cssForComponents/Discover.css'
import {motion} from 'framer-motion'
export default function Discover(){
    return(
        <>
            <motion.div
             className="Discover-container" id='CONTACT'
             >
                <motion.div
                initial={{
                    opacity:0,
                   
                }}
                whileInView={{
                    opacity:1,
                    translateY:[-50,0]
                }}
                viewport={{
                    amount:'some'
                }}
                transition={{
                    duration:1
                }}
                className='discover-motion-heading-container'
                >
                <p className='discover-heading' 
                ><span className='orange-text'>Discover</span><br></br></p>
                    <p className='discover-bold-text'>Zindagi Holdings & CO</p>
                </motion.div>
              
                <div
               
               
                >
                <p className='discover-p'>loHis offices were <span className='orange-text'>located</span> in a warehouse behind Ninsei, part of which seemed to move of their own accord, gliding with a random collection of European furniture, as though Deane had once<span className='orange-text'>intended</span>  to use the place as his  <span className='orange-text'>home</span> . The alarm still oscillated, louder here, the rear of the blowers and the amplified breathing of the fighte
                loremThey <span className='orange-text'>floated</span> in the coffin for Armitage’s call. Why bother with the movement of the train, their high<span className='orange-text'>heels</span>  like polished hooves against the gray metal of the console in<span className='orange-text'> faded</span> pinks and yellows.
                </p>
                </div>
               
            </motion.div>
        </>
    )
}