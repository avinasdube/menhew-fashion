import React, { useState } from 'react';
import './Categories.scss';

import arrowIcon from '../../assets/icons/arrowdown.png';
import MenProducts from '../../components/MenProducts/MenProducts';
import KidsProducts from '../../components/KidsProducts/KidsProducts';
import Navbar from '../../components/NavBar/Navbar';
import AllProducts from '../../components/AllProducts/AllProducts';

const Categories = () => {

  // FUNCTION FOR SETTING CATEGORY

  const [category, setCategory] = useState('');

  function menCategory() {
    setCategory("men");
  }

  function kidsCategory() {
    setCategory("kids");
  }

  // FUNCTION FOR SETTING DROPDOWN

  const [dropdown, setDropdown] = useState(false);

  const dropdownToggle = () => {
    dropdown === false ? setDropdown(true) : setDropdown(false);
  }

  // FUNCTION FOR SORTING PRODUCTS

  const [sortby, setSortBy] = useState("asc");

  function sortAsc() {
    setSortBy("asc");
  }

  function sortDesc() {
    setSortBy("desc")
  }


  return (
    <div className="categoriesContainer">
      <header>
        <Navbar />
        <div className="headerText">
          <div className="textLeft">
            THE ULTIMATE <br></br>
            FOR ALL THE <br></br>
          </div>
          <div className="textRight">
            FASHION STOP <br></br>
            GENTLEMEN !
          </div>
        </div>
        <div className="headerButtons">
          <button className={`catbutton ${category === "kids" ? 'active' : 'inactive'}`} onClick={() => kidsCategory()}>For Kids</button>
          <button className={`catbutton ${category === "men" ? 'active' : 'inactive'}`} onClick={() => menCategory()}>For Men</button>
        </div>
      </header >

      <main>
        <div className="catHeading">
          {category === 'kids'
            ? 'Explore Fashion for Kids'
            : category === 'men'
              ? 'Explore Fashion for Men'
              : 'Explore Fashion From Our Curated Collection of Quality Products'
          }
        </div>

        <div className="filterOptions">
          <div className="sortByFilter">
            <div className="sortByDropdown" onClick={dropdownToggle}>
              <div className="defaultText">Sort By</div>
              <img src={arrowIcon} alt='' className={`img ${dropdown === true ? 'active' : 'inactive'}`}></img>
            </div>
            <div className={`sortByOptionsList ${dropdown === true ? 'active' : 'inactive'}`}>
              <div className="sortByScrollBox">
                <ul>
                  <option className={`option ${sortby === 'asc' ? 'active' : 'inactive'}`} id='optn' onClick={() => sortAsc()}>Price: Low to High</option>
                  <option className={`option ${sortby === 'desc' ? 'active' : 'inactive'}`} id='optn' onClick={() => sortDesc()}>Price: High to Low</option>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="productLists">
          {
            category === 'kids'
              ?

              <>
                <KidsProducts category={category} sort={sortby}/>
              </>

              : category === 'men' ?

                <>
                  <MenProducts category={category} sort={sortby}/>
                </>

                : <AllProducts sort={sortby} />
          }
        </div>
      </main>
    </div >
  )
}

export default Categories;