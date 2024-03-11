import {motion} from 'framer-motion'
export default function Main(){
    return(
        <>
        <div>
        <motion.div className="Main-heading-container" 
            initial={{
                x:-300
            }}
            animate={{
                x:0
            }}
            transition={{
                duration:1
            }}
            >
               <h1
               
               >YOUR TRUST,<br></br>
                OUR CORNER STONE
               </h1>
            </motion.div>
        </div>
            
        </>
    )
}