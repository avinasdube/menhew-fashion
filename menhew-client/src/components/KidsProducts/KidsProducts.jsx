import React from 'react';
import './KidsProducts.scss';

import kids from '../../assets/images/a1.jpeg';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const KidsProducts = ({ category, sort }) => {

    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][categories][title][$eq]=${category}`);

    return (
        <div className="kidsProductContainer">
            <div className="kidsProductsBox" key={data?.attributes?.key}>
                {isError 
                   ? "Something went wrong !"
                   : isLoading
                   ? "loading"
                   :  data?.map(product => (
                        <ProductCard product={product} category={category} key={data?.attributes?.key} />
                    ))
                }
            </div>
        </div>
    )
}

export default KidsProducts;