import './FeaturedProducts.scss';

import longarrow from '../../assets/icons/longarrow.png';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const {data, isLoading, isError} = useFetch(`/products?populate=*`);

    console.log(data);

    return (
        <div className="productsCardContainer">
            <input type='radio' name='slider' id='s1' checked></input>
            <input type='radio' name='slider' id='s2' checked></input>
            <input type='radio' name='slider' id='s3' checked></input>
            <input type='radio' name='slider' id='s4' checked></input>
            <input type='radio' name='slider' id='s5' checked></input>

            <div className="cards">
                {data?.map((featProduct) => (
                    <label htmlFor={featProduct.attributes.for} id={featProduct.attributes.productId} key={featProduct.attributes.key}>
                        <div className="card">
                            {console.log(process.env.REACT_APP_UPLOAD_URL)}
                            <img src={process.env.REACT_APP_UPLOAD_URL + featProduct.attributes?.img?.data?.attributes?.url} alt=''></img>
                            <div className='sCount'>{featProduct.attributes.slideCount}</div>
                            <div className="priceSection">
                                <div className="longArrow"><img src={featProduct.longArrow} alt=''></img></div>
                                <div className="price">&#8377; {featProduct.attributes.price}</div>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;