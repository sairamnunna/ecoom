import react, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Descriptionbox/Description";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product =()=>{
    const {all_products} = useContext (ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId));
    return(
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProduct/>
        </div>
    )
}

export default Product