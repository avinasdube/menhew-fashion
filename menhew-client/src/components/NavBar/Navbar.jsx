import React, { useState } from 'react';
import './Navbar.scss';

import menhew from '../../assets/icons/menhew.png';
import home from '../../assets/icons/home.png';
import categories from '../../assets/icons/categories.png';
import favourites from '../../assets/icons/favourite.png';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';
import avinas from '../../assets/images/av49.jpg';

import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    function dropdownToggle() {
        dropdown === true ? setDropdown(false) : setDropdown(true);
    }

    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <div className='navLinks'>
                    <img src={avinas} alt='' id='prflmg'></img>
                    <Link className='link' to='/'><img src={home} alt=''></img></Link>
                    <Link className='link' to='/categories'><img src={categories} alt=''></img></Link>
                </div>
            </div>

            <div className='navbarCenter'>
                <div className='menhewLogo'>
                    <Link className='link' to='/'>
                        <img src={menhew} alt='loading'></img>
                        <span>Menhew</span>
                    </Link>
                </div>
            </div>

            <div className='navbarRight'>
                <div className="searchBar">
                    <img src={search} alt=''></img>
                </div>
                <div className="favourites">
                    <img src={favourites} alt=''></img>
                </div>
                <div className='cart'>
                    <div className={`cartDropdown ${dropdown === true ? 'active' : 'inactive'}`} onClick={dropdownToggle}>
                        <img src={cart} alt=''></img>
                        <span>0</span>
                    </div>
                    <div className={`cartDropdownBox ${dropdown === true ? 'active' : 'inactive'}`}>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;