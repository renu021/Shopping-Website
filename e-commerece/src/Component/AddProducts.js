import React, {useState} from 'react'
import {storage,fs} from '../Configuration/Config'
import './AddProductStyle.css'


const Addproduct = () =>{

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[strikeoutPrice, setStrikeoutPrice] = useState('')
    const[offer, setOffer] = useState('')
    const[image, setImage] = useState(null)

    const[imageError, setImageError] = useState('')

    const[successMsg, setSuccessMsg] = useState('')
    const[uploadErrorMsg, setUploadErrorMsg] = useState('')

    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile)
                setImageError('')
            }
            else{
                setImage(null)
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file')
        }
    }






    const handleAddProducts = (e) => {
        e.preventDefault();
        
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
        
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               // console.log(progress);
            },
            (error) => {
                setUploadErrorMsg(error.message);
            },
            () => {
                storage
                    .ref('product-images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        fs.collection('products').add({
                            title,
                            description,
                            price: Number(price),
                            strikeoutPrice: Number(strikeoutPrice),
                            offer,
                            url
                        });
                    })
                    .then(() => {
                        setSuccessMsg('Product added successfully');
                        setTitle('');
                        setDescription('');
                        setPrice('');
                        setStrikeoutPrice('');
                        setOffer('');
                        setImage(null);
                        setImageError('');
                        setUploadErrorMsg('');
                        const fileInput = document.getElementById('file');
                        if (fileInput) {
                            fileInput.value = '';
                        }
                        setTimeout(() => {
                            setSuccessMsg('');
                        }, 3000);
                    })
                    .catch((error) => {
                        setUploadErrorMsg(error.message);
                    });
            }
        );
    };
    



    return(
        <div className="addProduct-container">
<div className="addProduct-form">
            

            <form action="" onSubmit={handleAddProducts}>
            <h1> Add Product</h1>

                {successMsg && 
                        <>
                        <div className="successMsg">
                            {successMsg}
                        </div>
                        </>
                }
                <div>
                <label htmlFor="">Product Name</label><br/>
                <input type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                </div>

                <div>
                <label htmlFor="">Product Description</label><br/>
                <input type="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                 />
                </div>

                <div>
                <label htmlFor="">Product Price</label><br/>
                <input type="number"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                 />
                </div>

                <div>
                <label htmlFor="">Product Strikeout Price</label><br/>
                <input type="number"
                value={strikeoutPrice}
                onChange={(e)=>setStrikeoutPrice(e.target.value)}
                 />
                </div>

                <div>
                <label htmlFor="">Product Offer</label><br/>
                <input type="text"
                value={offer}
                onChange={(e)=>setOffer(e.target.value)}
                 />
                </div>

                <div>
                <label htmlFor="">Product Image</label><br/>
                <input type="file" id="file"
                onChange={handleProductImg}
                />
                </div>
                {imageError && 
                    <>
                    <div className="error-msg">
                        {imageError}
                    </div>
                    </>
                }

                <div>
                    <button type="submit" >
                        Upload
                    </button>
                </div> 
                {uploadErrorMsg && 
                    <>
                    <div className="error-msg">
                        {uploadErrorMsg}
                    </div>
                    </>
                    }
            </form>
                    

        </div>
        </div>
        
    )
}

export default Addproduct


