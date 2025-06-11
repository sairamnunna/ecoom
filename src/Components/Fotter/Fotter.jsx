import react from "react";
import './Fotter.css'
import logo from '../Assets/logo.png'
import insta from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import pin from '../Assets/pinterest.png'

const Fotter =()=>{
    return(
        <div className="fotter">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="fotter-social-icons">
                <div className="fotter-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="fotter-icons-container">
                    <img src={pin} alt="" />
                </div>
                <div className="fotter-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="fotter-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Fotter