import '../cssForComponents/wealth.css'
import {motion} from 'framer-motion'
export default function Wealth({wealthNumber}){
    return(
        <>
            <div className="Wealth-container">
            <motion.div
           initial={{
            opacity:0
           }} 
           whileInView={{
            opacity:1,
            translateY:[100,0]
           }}
           viewport={{
            amount:'some'
           }}
           transition={{
            duration:1
           }}
            className='wealth-heading-container'>
                    <div className='wealth-heading-text-container'>
                    <p className='wealth-heading'>Total Wealth<br></br>Generated</p>
                    </div>
                
                <br></br>
                <p className='wealth-heading' id='number'>{wealthNumber}</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1,
                    translateX:[100,0]
                }}
                viewport={{
                    amount:'some'
                }}
                transition={{
                    duration:1
                }}
                className='wealth-image-container'>
                    <img src='finance-planner2.gif' className='wealth-img'/>
                </motion.div>
                
                
            </div>
        </>
    )
}