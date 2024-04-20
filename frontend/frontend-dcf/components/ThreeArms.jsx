import React from 'react'
import '../cssForComponents/three.css'
const ThreeArms = () => {
  return (
    <>
    <div className='arms-container'>
    <div className='title'>Our 3 Arms</div>
    <div className='cards-container'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>

    </div>
    </div>
    
    </>
    
  )
}
function Cards(){
    return(
        <h1 >cards</h1>
    )
}

export default ThreeArms