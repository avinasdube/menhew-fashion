import React from 'react'
import './AllProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const AllProducts = ({ sort }) => {

    const { data, isLoading, isError } = useFetch(`/products?populate=*&sort=price:${sort}`);

    return (
        <div className="allProductsBox">
            {isError
                ? "Something went wrong !"
                : isLoading
                ? "loading"
                : data?.map(product => (
                    <ProductCard product={product} category='allproducts' key={product?.attributes?.key}/>
                ))
            }
        </div>
    )
}

export default AllProducts