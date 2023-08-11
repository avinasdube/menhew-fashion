import React from 'react';
import './KidsProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const KidsProducts = ({ category, sort }) => {

    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][categories][title][$eq]=${category}&sort=price:${sort}`);

    return (
        <div className="kidsProductsBox">
            {isError
                ? "Something went wrong !"
                : isLoading
                ? "loading"
                : data?.map(product => (
                    <ProductCard product={product} category={category} key={product?.attributes?.key} />
                ))
            }
        </div>
    )
}

export default KidsProducts;