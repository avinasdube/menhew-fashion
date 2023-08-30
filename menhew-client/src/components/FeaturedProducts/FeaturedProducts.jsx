// a component to showcase featured products at homepage

import './FeaturedProducts.scss';

import useFetch from '../../hooks/useFetch';
import FeaturedProductsLoading from './FeaturedProductsLoading';

import goToIcon from '../../assets/icons/upright.png';
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ type }) => {

    // using our custom hook useFetch() to get data of featured products by passing 'type' as filter

    const { data, isLoading, isError } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return (
        <div className="featuredContainer">

            <div className="productsCardContainer">
                <input type='radio' name='slider' id='s2' checked readOnly></input>
                <input type='radio' name='slider' id='s3' checked readOnly></input>
                <input type='radio' name='slider' id='s4' checked readOnly></input>
                <input type='radio' name='slider' id='s5' checked readOnly></input>
                <input type='radio' name='slider' id='s1' checked readOnly></input>

                <div className="cards">
                    {isError
                        ? "Something went wrong"
                        : isLoading
                            ?
                            <FeaturedProductsLoading />
                            : data?.map((featProduct) => (
                                <label htmlFor={featProduct?.attributes?.for} id={featProduct?.attributes?.productId} key={featProduct?.attributes?.key}>
                                    <div className="card">

                                        {/* using REACT_APP_UPLOAD_URL variable of 'env' file to provide path url for accessing image */}

                                        <img src={process.env.REACT_APP_UPLOAD_URL + featProduct.attributes?.img?.data?.attributes?.url} alt=''></img>
                                        <div className='sCount'>{featProduct?.attributes?.slideCount}</div>
                                        <div className="priceSection">
                                            <Link className='link' to={`/categories/${featProduct?.attributes?.categories?.data[0]?.attributes?.title}/product/${featProduct?.id}`}>
                                                <button className="uprightSign"><img src={goToIcon} alt=''></img></button>
                                            </Link>
                                            <div className="price">&#8377; {featProduct?.attributes?.price}</div>
                                        </div>
                                    </div>
                                </label>
                            ))}
                </div>
            </div>

            <div className="specialOfferSection">
                <div className="offerCard">
                    <div className="titleText">
                        FASHION DEFINES YOU !
                    </div>
                    <Link className='link' to='/categories'>EXPLORE NOW</Link>
                </div>
            </div>

        </div>
    )
}

export default FeaturedProducts;