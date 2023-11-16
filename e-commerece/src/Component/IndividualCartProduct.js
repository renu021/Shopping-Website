import React from 'react'
import {auth, fs} from '../Configuration/Config'
import './IndividualCartStyle.css'


const IndividualCartProduct = ({cartProduct, cartProductIncrease, cartProductDecrease}) => {

   
   
    const handleCartProductIncrease = () => {
        cartProductIncrease(cartProduct)
    }


   
   
    const handleCartProductDecrease = () => {
        cartProductDecrease(cartProduct)
    }

   
   
   
    const handleCartProductDelete = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                fs.collection('cart' + user.uid).doc(cartProduct.ID).delete().then(() => {
                    console.log('Successfully deleted');
                })
            }
        })
}
      
      
      
      

    return(
        
            
        <div className="cart-card">
            <div className="cart-img">
            <img src={cartProduct.url}  />
            </div>
                    
            <div className="cart-card-content">
                <h4 className="cart-title">{cartProduct.title}</h4>
                <p className="price">
                    <span className="orginial-price">Rs.{cartProduct.price}</span> 
                </p>
            </div>    

            

            <div className="quantity-button">
                        <div>
                        <span className="cart-qty">Quantity :</span>
                        <button onClick={handleCartProductDecrease}  className="product-Quantity-minus">-</button>
                        <span>{cartProduct.qty}</span>
                        <button onClick={handleCartProductIncrease}  className="product-Quantity-plus">+</button>  
                        </div>
                        <div className="total-div"><span className="total">TOTAL AMOUNT :</span>  Rs.{cartProduct.TotalProductPrice}</div>
            </div>


                        
            <div>
                    <button onClick={handleCartProductDelete} className="cart-delete-button">DELETE</button>
            </div>         
            
        </div>
    )
}
export default IndividualCartProduct

