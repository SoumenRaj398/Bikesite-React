import React from 'react';

const Rightcart = (props) => {
    const{name}=props.honda;
    console.log(props.bike);
   
    return (
        <div>
            <p>{name}</p>
            
        </div>
    );
};

export default Rightcart;