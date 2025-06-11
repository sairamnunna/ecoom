import react from "react";
import './offers.css'
import image from '../Assets/offer_1.png'

const Offers =() =>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check now</button>
            </div>
            <div className="offers-right">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Offers