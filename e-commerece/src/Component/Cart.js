import React, {useState, useEffect} from 'react'
import Navbar from '../Component/Navbar'
import {auth, fs} from '../Configuration/Config'
import CartProducts from '../Component/CartProducts'

import './CartStyle.css'



const Cart = () => {

    function GetCurrentUser(){
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().name);
                    })
                }
                else{
                    setUser(null)
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();
    console.log(user)


//State of cart products
    const [cartProducts, setCartProducts] = useState([]);

// getting cart products from firestore collection and updating the state
    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            if(user){
                fs.collection('cart' + user.uid).onSnapshot(snapshot => {
                    const newCartProduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);
                })
            }
            else{
                console.log('user is not signed in to retrieve cart')
            }
        })
    },[])
 
    console.log(cartProducts)



    let Product;
//cart product increase function
    const cartProductIncrease = (cartProduct) =>{
        console.log(cartProduct)
        Product = cartProduct;
        Product.qty = Product.qty+1;
        Product.TotalProductPrice =Product.qty * Product.price;
        //updating in database
        auth.onAuthStateChanged(user => {
            if(user){
                fs.collection('cart' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                    console.log('increment added')
                })
            }
            else{
                console.log('user is not logged in to increment')
            }
        })
    }


// cart product decrease function
    const cartProductDecrease = (cartProduct) => {
        Product = cartProduct;
        if(Product.qty > 1) {
            Product.qty = Product.qty-1;
            Product.TotalProductPrice =Product.qty * Product.price;

            //updating in database
            auth.onAuthStateChanged(user => {
                if(user){
                    fs.collection('cart' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                        console.log('Decrement')
                    })
                }
                else{
                    console.log('user is not logged in to increment')
                }
            })
        }
    } 









    return (
        <div className="cart-parent-container">
            <Navbar user={user} />
            {cartProducts.length > 0 && (
                <div>
                    <h1 className="cart-title">Cart</h1>
                    <div>
                        <CartProducts cartProducts={cartProducts} 
                                      cartProductIncrease={cartProductIncrease} 
                                      cartProductDecrease={cartProductDecrease} 
                                />
                    </div>

                    {/* <div className="summary-box">
                        <h5>Cart Summary</h5>
                        <div>
                            Total No of Products : <span>{totalQty}</span>
                        </div>
                        <div>
                            Total Price to Pay : <span>Rs.{}</span>
                        </div>
                        <StripeCheckout>
                            
                        </StripeCheckout>
                    </div> */}
                    
                </div>
            )}
            {cartProducts.length < 1 && (
                <div>No Products to show</div>
            )}
        </div>
    )
}
export default Cart










