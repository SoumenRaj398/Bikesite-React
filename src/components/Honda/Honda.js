import React from 'react';
import "./Honda.css"

const Honda = (props) => {
    const{img,name,price}=props.honda;
    
    
    return (
        <div className="bike-info">
            <img src={img} alt=""></img>
            <div>
            <p>Brand Name:{name}</p>
            <p>Price:{price}tk</p>
            </div>
            <button onClick={() =>props.handleAddtoCart(props.honda)} className="btn-bike">Add To Cart <i class="bi bi-bicycle"></i></button>
            
        </div>
        
        
       
    );
};

export default Honda;