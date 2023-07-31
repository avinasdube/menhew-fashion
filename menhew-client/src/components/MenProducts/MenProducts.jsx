import React from 'react';
import './MenProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const MenProducts = ({category, sort}) => {

    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][categories][title][$eq]=${category}`);

    return (
        <div className="menProductContainer">
            <div className="menProductsBox" key={data?.attributes?.key}>
                {isError 
                   ? "Something went wrong !"
                   : isLoading
                   ? "loading"
                   : data?.map(product =>(
                        <ProductCard product={product} category={category} key={data?.attributes?.key}/>
                    ))
                }
            </div>

        </div>
    )
}

export default MenProducts;