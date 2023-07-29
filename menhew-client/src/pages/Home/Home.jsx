import React from 'react';
import './Home.scss';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import CheckThisOut from '../../components/CheckThisOut/CheckThisOut';

const Home = () => {
  return (
    <div className="homeContainer">
      
      <main>
        <div className='featuredProducts'>
          <div className="middleHead">
            Featured Collection
          </div>
          <FeaturedProducts type="featured"/>
        </div>

        <div className="quote1">
          Your Style Speaks !
        </div>

        <div className='checkThisOut'>
          <CheckThisOut type="checkthisout"/>
        </div>
      </main>
    </div>
  )
}

export default Home;