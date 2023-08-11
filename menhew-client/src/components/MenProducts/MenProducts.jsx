import React from 'react';
import './MenProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const MenProducts = ({ category, sort, subCats}) => {

    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][categories][title][$eq]=${category}&sort=price:${sort}`);


    return (
        <div className="menProductsBox">
            {isError
                ? "Something went wrong !"
                : isLoading
                ? "loading"
                : data?.map(product => (
                    <ProductCard product={product} category={category} key={product?.attributes?.key}/>
                ))
            }
        </div>
    )
}

export default MenProducts;