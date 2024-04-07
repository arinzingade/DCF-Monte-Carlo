import '../cssForComponents/footer.css'
import { Link } from 'react-scroll'
export default function Footer(){
    return(
        <>
            < div className="footer-container">
                
                     <div className="contact-container">
                <p className="footer-p contact">Contact:</p>
                <p className="footer-p">+91 92847 26482</p>
                <p className="footer-p">+91 92847 26482</p>
                <p  className="footer-p">support@zingadeholdings.com</p>
                </div>
                <div className="our-three-arms-container">
                <p className="footer-p Arms">Our Three Arms:</p>
                <p className="footer-p" >
                    <Link to='ABOUT US'
                    
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-200}
      duration={1000}
                    >
                    Rouge Capital Management
                    </Link>
                   </p>
                <p className="footer-p" >
                <Link to='ABOUT US'
                    
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-200}
                    duration={1000}
                                  >
                                 Parabolica Private Investments
                                  </Link>
                    </p>
                <p  className="footer-p" >
                <Link to='ABOUT US'
                    
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-200}
                    duration={1000}
                                  >
                               Belvedere Estates
                                  </Link>
                    </p>
                </div>  
               <div className="footer-logo-container">
                <p className='footer-title-p'>Zingade Holdings & Co</p>
                </div>
            </div>
        </>
    )
}