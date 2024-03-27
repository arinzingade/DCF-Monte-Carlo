import '../cssForComponents/login.css'
export default function Login(){
    return(
        <>
            <div className="Login-container" id='login'>         
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
                
                <button className='submit-btn'>Submit</button>
               </form>
                    </div>  
              
                </div>
               
               
            </div>
        </>
    )

}