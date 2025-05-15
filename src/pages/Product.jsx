import React, { useContext } from 'react' 
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'

const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
    console.log("Product:", product);


    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product} />
            
        </div>
    )
}
export default Product