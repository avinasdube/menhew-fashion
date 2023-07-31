import React from 'react';
import './Home.scss';

import featuredLogo from '../../assets/icons/longarrow.png'

import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import CheckThisOut from '../../components/CheckThisOut/CheckThisOut';
import Navbar from '../../components/NavBar/Navbar';

const Home = () => {
  return (
    <div className="homeContainer">

      <div className="homepageWelcome">

        <Navbar />

        <div className="logoSection">
          <div className="logo">MENHEW</div>
          <div className="logoDes">A Gentlemen is never off-fashion !</div>
        </div>

      </div>

      <div className='featuredProducts'>
        <div className="middleHead">
          <img src={featuredLogo} alt=''></img> Featured Collection
        </div>
        <FeaturedProducts type="featured" />
      </div>

      <div className="quote1">
        <img src={featuredLogo} alt=''></img>  Your Style Speaks !
      </div>

      <div className='checkThisOut'>
        <CheckThisOut type="checkthisout" />
      </div>

    </div >
  )
}

export default Home;