import React from 'react'

const ProductLoading = () => {
    return (
        <div className="singleProductContainer">

            <div className="nbar">

            </div>

            <div className="singleProductBox">
                <div className="leftSide">
                    <div className="imgScroll">
                        <div className="scrollImgLoad"></div>
                        <div className="scrollImgLoad"></div>
                    </div>
                    <div className="imgView">
                        <div className="imgvwLoad"></div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="productNameLoad"></div>
                    <div className="productDescripLoad"></div>
                    <div className="productPriceLoad"></div>
                    <div className="priceNoteLoad"></div>

                    <div className="productQuantity">
                        <button></button>
                        <span></span>
                        <button></button>
                    </div>

                    <div className="selectSize">
                        <div className="selectSizeHeading"></div>
                        <div className="sizeButtons">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>

                    <div className="actionButtons">
                        <button className="addToCart"> <img src='' alt=''></img></button>
                        <button className="addToFavourite"><img src='' alt=''></img></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLoading