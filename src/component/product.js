import React from "react";

const Product =({ product }) =>{
    return(
        <article className="product">
            <img src={product.image} alt="productImage"/>
            <div className="product_details">
            <h4 className="product_title">{product.title}</h4>
            <p className="product_price">Price :${product.price}</p>
            <p className="product_rating">Rating : {product.rating.rate}/5</p>
            <p className="product_desc">Description : {product.description}</p>
            <button className="product_btn btn">Add to cart</button>
            </div>
        </article>
    );
};

export default Product;