import '../cssForComponents/login.css'
import {motion} from 'framer-motion'
export default function Login(){
    return(
        <>
            <motion.div 
            initial={{
                opacity:0,
                
            }}
            whileInView={{
                opacity:1,
                translateX:[-50,0],
                
            }}
            viewport={{
                amount:'some'
            }}
            transition={{duration:1}}
            className="Login-container" id='login'>         
                <div className='form-container'>
                <div className='gif-container'>
                    <img className='login-gif' src='login.gif'></img>
                </div>
                <div>
                <div className='login-heading'>
                    <p className='login-text-p'>LOGIN<hr></hr></p>
                </div>
               <form className='form-container-form'>      
                <input type="text" placeholder="username" className='login-input'></input>     
                <input type="text" placeholder="password" className='login-input'></input>
                
                <button className='button type1'>Submit</button>
               </form>
                    </div>  
              
                </div>
               
               
            </motion.div>
        </>
    )

}