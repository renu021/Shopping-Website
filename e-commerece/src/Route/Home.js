
import React, {useState, useEffect} from 'react'
import Navbar from '../Component/Navbar'
import ImageSlide from '../Component/ImageSlide' 
import Footer from '../Component/Footer'
import {auth, fs} from '../Configuration/Config'
// import {Product} from  '../Product/Product'
import '../Component/CardStyle.css'
import {Products} from '../Component/Products'



const Home = (props) => {

    

    //getting user uid
    function GetUserUid(){
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if(user){
                    setUid(user.uid)
                }
            })
        },[])
        return uid;
    }
    const uid = GetUserUid();




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


//product State
    const [products, setProducts] = useState([])
// getting product data from firebase
    const getProducts = async () => {
        const products = await fs.collection('products').get();
        const productsArray = [];
        for (var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length ===  products.docs.length){
                setProducts(productsArray);
            }
        }
    }

    useEffect(() => {
        getProducts();
    },[])


    
// cart
let Product;
const addToCart = (product) => {
     if (uid !== null) {
       console.log(product);
       Product = product;
       Product['qty'] = 1;
       Product['TotalProductPrice'] = Product.qty*Product.price;
       fs.collection('cart' + uid).doc(product.ID).set(Product).then(() => {
            console.log('Successfully added to cart')
        })
    } else {
         props.navigate('/Log');
    }
};


    return(
        <div>
            

            <Navbar user={user} />

            <ImageSlide /> 

             {products.length > 0 && (
                <div>

                    <div className="HeroCard-Container-Title">
                    <h1>CATEGORY SPECIALS</h1>
                    </div>
                    <div>
                    <Products products={products} addToCart={addToCart} />
                    </div>        
                    
                </div>
            )}
            {products.length < 1 && (
                <div>Please wait...</div>
            )} 

            {/* <Product  /> */}

            <Footer />   
           
        </div>
    )
}

export default Home 













