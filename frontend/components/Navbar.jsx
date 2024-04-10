import React from 'react'
import '../cssForComponents/Navbar.css'

export const Navbar = () => {
  return (
   <>
   <div className='nav-container'>
   <div className='nav-icon'></div>
    <div className='nav-title'>Zingade Holdings <span>& Co</span></div>
    <div className='nav-link'>
        <a className='client-login'>client login</a>
    </div>
   </div>
    
   </>
  )
}
