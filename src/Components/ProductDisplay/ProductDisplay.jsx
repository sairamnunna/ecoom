import React, { useContext } from "react";
import star_icon from '../Assets/star.png'
import star_icon_dull from '../Assets/star-2.png'
import './ProductDisplay.css'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay =(props)=>{
    const {product}=props;
    const {addToCart} =useContext(ShopContext);


    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-imagelist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} style={{width:18, height:20}} alt="" />
                    <img src={star_icon} style={{width:18, height:20}} alt="" />
                    <img src={star_icon} style={{width:18, height:20}} alt="" />
                    <img src={star_icon} style={{width:18, height:20}} alt="" />
                     <img src={star_icon_dull} style={{width:18, height:20}} alt="" />
                     <p>(122)</p>
                </div>
                <div className="productdisplay-rightprices">
                    <div className="productdisplay-right-oldprice">${product.old_price}</div>
                    <div className="productdisplay-right-newprice">${product.new_price}</div>
                    <div className="productdisplay-right-description">
                        
                    </div>Upgrade your wardrobe with this slim fit cotton T-shirt, combining comfort and style. Crafted from breathable fabric, it's perfect for daily wear or casual outings
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-size">
                            {/* <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div> */}
                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                            </ul>
                    
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <p className="prodoctdisplay-right-category"><span>Category : </span>Women , T-Shirt, Crop Top</p>
                        <p className="prodoctdisplay-right-category"><span>Tags : </span>Modern,Latest </p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay