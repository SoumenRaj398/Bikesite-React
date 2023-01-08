import React, { useState } from 'react';
import Honda from '../Honda/Honda';

import Rightcart from '../Rightcart/Rightcart';
import './Hondas.css'

const Hondas = () => {
    const[bike,setBike] =useState([]);
    const hondas = [
        {id:11,name:"R15 BIKE",price:450000,img:"1.jpg"},
        {id:12,name:"GIXXER SF BIKE",price:350000,img:"2.jpg"},
        {id:13,name:"GIXXER BIKE",price:150000,img:"3.jpg"},
        {id:14,name:"FAZER BIKE",price:250000,img:"4.jpg"},
        {id:15,name:"PULSAR BIKE",price:170000,img:"5.jpg"},
        {id:16,name:"HUNK BIKE",price:150000,img:"6.jpg"},
        {id:17,name:"DISCOVER BIKE",price:90000,img:"7.jpg"},
        {id:18,name:"CBZ BIKE",price:250000,img:"8.jpg"},
        {id:19,name:"APACHE RTR 4V",price:210000,img:"9.jpg"},
    ]

    const handleAddtoCart = (honda) =>{
    
    const newBike =[...bike,honda];
    setBike(newBike);
    }

    const handleClear = () =>{

        setBike([]);
    }
    const handleChoose = () =>{
        for(let i=0;i<bike.length;i++){
            const random1 = [bike[Math.floor(Math.random()*bike.length)]];
   setBike(random1);
        }
    }
    
    
    return (
        <div className="honda-container ">
            

            <div className="bikes-container">
            {
               hondas.map(honda=><Honda
               key ={honda.id}
               honda={honda}
               handleAddtoCart={handleAddtoCart}
               ></Honda>)
            }

            </div>

            <div className="bike-container">
                  <h2>Which Bike You Want</h2>
                  {
                      bike.map(honda =><Rightcart
                      key ={honda.id}
                      honda={honda}></Rightcart>)
                  }
                  
                  <button onClick={handleChoose} className="btn-choose">Choose Any Bike</button>
                  <button onClick={handleClear} className="btn-clear">Clear All</button>
                  

                  

                  
            </div>
           
            
            
            
        </div>
    )
   
    
};



export default Hondas;