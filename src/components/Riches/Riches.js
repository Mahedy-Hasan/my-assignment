import React, { useEffect } from 'react';
import'./Riches.css'

import { useState } from 'react';
import Rich from '../Rich/Rich';
import Cart from './Cart';

// /cjs/react.development'



//    all reaches 
const Riches = () => {
    const [riches,setRiches]=useState([])
    useEffect(()=>{
        fetch('./data.json')
            .then(res=>res.json())
             .then(data=>setRiches(data))
    },[])

    const [ cart , setCart ] = useState([]);
    const handleAddProduct=(rich)=>{
    
        const newCart=[ ...cart  , rich ]
        setCart(newCart)
    }
    return (
       <div className='main'>
          
            <div className='rich'>
           
           {
        riches.map(rich=> <Rich handleAddProduct={handleAddProduct} key={rich.id} Rich={rich}></Rich> )
      }
        </div>
        <div className='cart'>
        
 
              <Cart cart={cart}></Cart>
        
           </div>
       </div>
        
    );
};

export default Riches;