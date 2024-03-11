import '../cssForComponents/Navbar.css'
export default function Navbar(){
    return(
        <>
            <div className="container">
                <div className="logo-container">SAX-SUX PROJECT</div>
                <div className="list-container">
                    <ul className="navbar-list">
                       <li><a  href="#">Contact</a></li> 
                       <li><a href="#">Career</a></li> 
                       <li><a href="#">About Us</a></li> 
                    </ul>
                </div>
                
            </div>
        </>
    )
}