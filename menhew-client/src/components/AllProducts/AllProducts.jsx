// a component to showcase all products in case no filters are applied

import React from 'react'
import './AllProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const AllProducts = ({ sort }) => {

    // using our custom hook 'useFetch()' to get data of all products when no filters are applied
    // using 'sort' prop for sorting out products in ascending or descending

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