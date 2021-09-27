
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./Card.css'
// total cart
const Cart = (props) => {
    
    const {cart}=props
    // const element = <FontAwesomeIcon icon={faUser}/>
    let total=0
    for(const single of props.cart){
        
        total=total+single.worth
       
    }   

    return(
        <div>
            <div className='main-cart'>
            <h5>Total added: {props.cart.length}</h5>
            <h5>Total fund: {total}(Billion)</h5>
            </div>
            <div>
            <ul className='main-list'>
                   {
                       cart.map( product=> <li className='list' key='wealth'>{product.name}</li>)
                   }
               </ul>
        </div>
        </div> 
    );
};

export default Cart;