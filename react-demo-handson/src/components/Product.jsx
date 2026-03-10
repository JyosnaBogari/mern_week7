import React from "react";
function Product(props)  
{
    let {name,price,brand,description,image}=props.products;
    return(
        <div>
            <img src={image}/>
            <h3>{name}</h3>
            <h5>{brand}</h5>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default Product;