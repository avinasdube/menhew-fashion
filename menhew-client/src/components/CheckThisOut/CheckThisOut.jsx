import React from 'react';
import './CheckThisOut.scss';

import upright from '../../assets/icons/upright.png';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const CheckThisOut = ({ type }) => {


    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return (
        <div className="checkThisOutContainer">
            <div className="checkThisOutCards">
                {isError
                    ? "Something went wrong"
                    : isLoading
                    ? "Loading"
                    : data?.map(product => (
                        <div className="checkThisOutCard" key={product?.attributes?.key}>
                            <img src={process.env.REACT_APP_UPLOAD_URL + product.attributes?.img?.data?.attributes?.url} alt=''></img>
                            <Link className='link' to={`/categories/${product.attributes.categories.data[0].attributes.title}/product/${product?.id}`}>
                                <button className="uprightSign"><img src={upright} alt=''></img></button>
                            </Link>
                            <div className="tag">Check This Out</div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CheckThisOut;