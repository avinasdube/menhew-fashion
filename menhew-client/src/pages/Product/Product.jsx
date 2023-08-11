import React, { useState } from 'react';
import './Product.scss';


import addToCartIcon from '../../assets/icons/addtocart.png';
import addToFavouriteIcon from '../../assets/icons/favourite.png';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/NavBar/Navbar';

import useFetch from '../../hooks/useFetch';
import ProductLoading from './ProductLoading';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {

    const id = useParams().id;

    const { data, isLoading, isError } = useFetch(`/products/${id}?populate=*`);

    const [viewImg, setViewImg] = useState("img");

    const [productQuantity, setProductQuantity] = useState(1);


    const dispatch = useDispatch();

    return (
        <div className="singleProductContainer">

            <div className="nbar">
                <Navbar />
            </div>

            {isError
                ? "Something went wrong"
                : isLoading
                    ?
                    <ProductLoading />
                    : (
                        <div className="singleProductBox">
                            <div className="leftSide">
                                <div className="imgScroll">
                                    <img
                                        className={`scrollImg ${viewImg === "img" ? 'active' : 'inactive'}`}
                                        src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                                        alt=''
                                        onClick={e => setViewImg("img")}>
                                    </img>
                                    <img
                                        className={`scrollImg ${viewImg === "img2" ? 'active' : 'inactive'}`}
                                        src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                                        alt=''
                                        onClick={e => setViewImg("img2")}>
                                    </img>
                                </div>
                                <div className="imgView">
                                    <img className='imgvw' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[viewImg].data?.attributes?.url} alt=''></img>
                                </div>
                            </div>
                            <div className="rightSide">
                                <div className="productName">{data?.attributes.title}</div>
                                <div className="productDescrip">{data?.attributes.descrip}</div>
                                <div className="productPrice">&#8377; {data?.attributes.price}</div>
                                <div className="priceNote">inclusive of all taxes</div>

                                <div className="productQuantity">
                                    <button onClick={() => setProductQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                                    <span>{productQuantity}</span>
                                    <button onClick={() => setProductQuantity((prev) => prev + 1)}>+</button>
                                </div>

                                <div className="selectSize">
                                    <div className="selectSizeHeading">Select Size</div>
                                    <div className="sizeButtons">
                                        <button>S</button>
                                        <button>M</button>
                                        <button>L</button>
                                        <button>XL</button>
                                        <button>2XL</button>
                                        <button>3XL</button>
                                    </div>
                                </div>

                                <div className="actionButtons">
                                    <button className="addToCart" onClick={()=>dispatch(addToCart({
                                        id: data.id,
                                        title: data.attributes.title,
                                        desc: data.attributes.descrip,
                                        img: data.attributes.img.data.attributes.url,
                                        price: data.attributes.price,
                                        productQuantity
                                    }))}> <img src={addToCartIcon} alt=''></img>Add to Cart</button>
                                    <button className="addToFavourite"><img src={addToFavouriteIcon} alt=''></img>Add to Favourites</button>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default Product;