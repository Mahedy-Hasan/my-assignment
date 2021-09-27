import React from 'react';
import'./rich.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// one rich person 
const Rich = (props) => {
   const {id,name,img,worth,education,Spouse}=props.Rich
   const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        
           <div className='one-rich'>
                
             <img  src={img} alt="" />    
            <p className="bold"><span className="font-width">ID:</span>{id}</p>
            <p className="bold"><span className="font-width" >Name:</span>{name}</p>
            <p className="bold"><span  className="font-width">Worth(Billion):</span>{worth}</p>
            <p className="bold"><span  className="font-width">Education:</span>{education}</p>
            <p className="bold"><span  className="font-width">Spouse:</span>{Spouse}</p>
            <button onClick={ ()=> props.handleAddProduct(props.Rich)}  type="button" className="btn button btn-secondary">{element} Add to commitee</button>
         </div>
           
            
    
        
    );
};

export default Rich;