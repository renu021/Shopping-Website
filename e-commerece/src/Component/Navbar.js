
import React, {useState} from 'react'
import {BsSearch, BsHandbag, BsPerson} from 'react-icons/bs'
import {HiLogin} from 'react-icons/hi'
import '../Component/NavbarStyle.css'
import {Link} from 'react-router-dom'



    const Navbar = ({user}) => {


    
    const [isActive, setIsActive] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    

   
    
    return(
        <div>
        <div className="Header">
            <div className="logo">
                <Link to="/">
                <img src="https://life.myntra.com/wp-content/themes/myntra_life/assets/img/Myntra-logo-horizontal-white.png" alt="" height ={45} />
                </Link>
            </div>

           



            <div className="drop-down">

                <div className="active-menu">
                <div className="dropdown-btn " onClick={(e) => setIsActive(!isActive)} >
                    MEN
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        <div>
                            <div>
                            <div className="dropdown-items"><span>Top</span></div>
                            <div className="dropdown-items">Casual Shirts</div>
                            <div className="dropdown-items">Formal Shirts</div>
                            <div className="dropdown-items">Sweatshirts</div>
                            <div className="dropdown-items">Sweaters</div>
                            <div className="dropdown-items">Jackets</div>
                            <div className="dropdown-items">Blazers & Coats</div>
                            <div className="dropdown-items">Suits</div>
                            </div>

                            <div className="Nested-div">
                            <div className="dropdown-items"><span>Indian & Festive Wear</span></div>
                            <div className="dropdown-items">Dhotis</div>
                            <div className="dropdown-items">Sherwanis</div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-items"><span>Bottomwear</span></div>
                            <div className="dropdown-items">Jeans</div>
                            <div className="dropdown-items">Casual Trousers</div>
                            <div className="dropdown-items">Formal Trousers</div>
                            <div className="dropdown-items">Shorts</div>
                            <div className="dropdown-items">Track Pants & Joggers</div>
                        </div>
                    </div>
                )}
                </div>

                


                <div className="touch-menu">
                <div className="dropdown-btn" onClick={(e) => setIsTouched(!isTouched)}>
                    WOMEN
                </div>
                {isTouched && (
                    <div className="dropdown-content">
                        <div>
                            <div>
                            <div className="dropdown-items"><span>Indian & Fusion Wear</span></div>
                            <div className="dropdown-items">Kurtas & Suits</div>
                            <div className="dropdown-items">Kurtis, Tunics & Tops</div>
                            <div className="dropdown-items">Sarees</div>
                            <div className="dropdown-items">Ethnic Wear</div>
                            <div className="dropdown-items">Leggings, Salwars & Churidars</div>
                            <div className="dropdown-items">Skirts & Palazzos</div>
                            <div className="dropdown-items">Dress Materials</div>
                            <div className="dropdown-items">Lehenga Cholis</div>
                            <div className="dropdown-items">Dupattas & Shawls</div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-items"><span>Western Wear</span></div>
                            <div className="dropdown-items">Tops</div>
                            <div className="dropdown-items">Tshirts</div>
                            <div className="dropdown-items">Jeans</div>
                            <div className="dropdown-items">Trousers & Capris</div>
                            <div className="dropdown-items">Shorts & Skirts</div>
                            <div className="dropdown-items">Playsuits</div>
                            <div className="dropdown-items">Jumpsuits</div>
                            <div className="dropdown-items">Shrugs</div>
                        </div>
                    </div>
                )}
                </div>
                


                    <div className="opened-menu">
                    <div className="dropdown-btn" onClick={(e) => setIsOpened(!isOpened)}>
                    KIDS
                </div>
                {isOpened && ( 
                    <div className="dropdown-content">
                        <div>
                            <div>
                            <div className="dropdown-items"><span>Boys Clothing</span></div>
                            <div className="dropdown-items">T-Shirts</div>
                            <div className="dropdown-items">Shirts</div>
                            <div className="dropdown-items">Shorts</div>
                            <div className="dropdown-items">Jeans</div>
                            <div className="dropdown-items">Trousers</div>
                            <div className="dropdown-items">Clothing Sets</div>
                            <div className="dropdown-items">Ethnic Wear</div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-items"><span>Girls Clothing</span></div>
                            <div className="dropdown-items">Dresses</div>
                            <div className="dropdown-items">Tops</div>
                            <div className="dropdown-items">Tshirts</div>
                            <div className="dropdown-items">Clothing Sets</div>
                            <div className="dropdown-items">Lehenga Choli</div>
                            <div className="dropdown-items">Kurta Sets</div>
                            <div className="dropdown-items">Skirts & Shorts</div>
                            <div className="dropdown-items">Trousers & Leggings </div>
                        </div>
                    </div>
                )}

                    </div>
                



                    <div className="selected-menu">
                    <div className="dropdown-btn" onClick={(e) => setIsSelected(!isSelected)}>
                    BEAUTY
                </div>
                {isSelected && (
                    <div className="dropdown-content">
                        <div>
                            <div>
                            <div className="dropdown-items"><span>Makeup</span></div>
                            <div className="dropdown-items">Lipstick</div>
                            <div className="dropdown-items">Lip Gloss</div>
                            <div className="dropdown-items">MasCara</div>
                            <div className="dropdown-items">Eyeliner</div>
                            <div className="dropdown-items">Kajal</div>
                            <div className="dropdown-items">Eyeshadow</div>
                            <div className="dropdown-items">Foundation</div>
                            <div className="dropdown-items">Primer</div>
                            <div className="dropdown-items">Concealer</div>
                            <div className="dropdown-items">Compact</div>
                            <div className="dropdown-items">Nail Polish</div>
                        </div>  
                        </div>  
                        <div>
                        <div className="dropdown-items"><span>Skincare, Bath & Body</span></div>
                        <div className="dropdown-items">Face Moisturiser</div>
                        <div className="dropdown-items">Cleanser</div>
                        <div className="dropdown-items">Masks & Peel</div>
                        <div className="dropdown-items">Sunscreen</div>
                        <div className="dropdown-items">Serum</div>
                        <div className="dropdown-items">Face Wash</div>
                        <div className="dropdown-items">Body Lotion</div>
                        <div className="dropdown-items">Body Scrub</div>
                        </div>
                        <div>
                        <div className="dropdown-items"><span>Haircare</span></div>
                        <div className="dropdown-items">Shampoo</div>
                        <div className="dropdown-items">Conditioner</div>
                        <div className="dropdown-items">Hair Cream</div>
                        <div className="dropdown-items">Hair Oil</div>
                        <div className="dropdown-items">Hair Gel</div>
                        <div className="dropdown-items">Hair Color</div>
                        <div className="dropdown-items">Hair Serum</div>
                        <div className="dropdown-items">Hair Accessory</div>
                        </div>
                        <div>
                            <div>
                            <div className="dropdown-items"><span>Fragrances</span></div>
                            <div className="dropdown-items">Perfume</div>
                            <div className="dropdown-items">Deodorant</div>
                            <div className="dropdown-items">Body Mist</div>
                            <div className="dropdown-items">Sunscreen</div>
                            </div>
                            <div className="Nested-div">
                            <div className="dropdown-items"><span>Men's Grooming</span></div>
                            <div className="dropdown-items">Trimmers</div>
                            <div className="dropdown-items">Beard Oil</div>
                            <div className="dropdown-items">Hair Wax</div>
                            </div>
                            <div className="Nested-div">
                            <div className="dropdown-items"><span>Beauty Gift & Makeup Set</span></div>
                            <div className="dropdown-items">Beauty Gift</div>
                            <div className="dropdown-items">Makeup Gift</div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-items"><span>Top Brands</span></div>
                            <div className="dropdown-items">Lakme</div>
                            <div className="dropdown-items">Maybelline</div>
                            <div className="dropdown-items">Loreal</div>
                            <div className="dropdown-items">Philips</div>
                            <div className="dropdown-items">Bath & Body Works</div>
                            <div className="dropdown-items">Mamaearth</div>
                            <div className="dropdown-items">Nivea</div>
                            <div className="dropdown-items">Lotus Herbals</div>
                        </div>
                    </div>
                )}

                    </div> 

            </div>    





            <div className="search-input">
                <button className="search-btn"><BsSearch /></button>
                <input type="text" placeholder="Search for products, brands and more" className="search-text" />
            </div>

            <div className="icons">
                
              

                {!user&&
                <>
                <div className="sign">
                 <Link to="/Sign"><BsPerson /></Link>                
                </div>

                <div className="login">
                <Link to="/Log"><HiLogin/></Link>    
                </div>
                </>
                }

                {user&&
                    <>
                    <div><Link to="/">{user}</Link></div>
                    <div>
                        <Link to="/cart">
                             <BsHandbag />
                        </Link>
                    </div>
                    </>
                }

                    <div>
                        <Link to="/Cart">
                             <BsHandbag />
                        </Link>
                    </div>

            </div>
            
        </div>
        </div>
    )
}


export default Navbar













