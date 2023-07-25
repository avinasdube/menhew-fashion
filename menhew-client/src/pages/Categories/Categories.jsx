import React, { useState } from 'react';
import './Categories.scss';

import arrowIcon from '../../assets/icons/arrowdown.png';
import MenProducts from '../../components/MenProducts/MenProducts';
import KidsProducts from '../../components/KidsProducts/KidsProducts';

const Categories = () => {

  const [category, setCategory] = useState("men");

  function menCategory() {
    setCategory("men");
  }

  function kidsCategory() {
    setCategory("kids");
  }

  const [dropdown, setDropdown] = useState(false);

  const dropdownToggle = ()=>{
    dropdown === false ? setDropdown(true) : setDropdown(false);
  }

  const[sortby, setSortBy] = useState("asc");

  function sortAsc(){
    setSortBy("asc");
  }

  function sortDesc(){
    setSortBy("desc")
  }

  return (
    <div className="categoriesContainer">
      <header>
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
          <button onClick={() => kidsCategory()}>For Kids</button>
          <button onClick={() => menCategory()}>For Men</button>
        </div>
      </header>

      <main>
        <div className="catHeading">{category === 'kids' ? 'For Kids' : 'For Men'}</div>
        <div className="catOptions">
          {category === 'kids' ?
            <>
              <div className='optionButtons'>
                <input type='checkbox' id='tshirt' value={'tshirts'}></input>
                <label htmlFor='tshirt'>T-Shirts</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='jeans' value={'jeans'}></input>
                <label htmlFor='jeans'>Jeans</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='trousers' value={'trousers'}></input>
                <label htmlFor='trousers'>Trousers</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='sports' value={'sports'}></input>
                <label htmlFor='sports'>Sports</label>
              </div>
            </> 
            
            :

            <>
              <div className='optionButtons'>
                <input type='checkbox' id='tshirt' value={'tshirts'}></input>
                <label htmlFor='tshirt'>T-Shirts</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='jeans' value={'jeans'}></input>
                <label htmlFor='jeans'>Jeans</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='trackpants'value={'trackpants'}></input>
                <label htmlFor='trackpants'>Trackpants</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='kurtas' value={'kurtas'}></input>
                <label htmlFor='kurtas'>Kurtas</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='shirts' value={'shirts'}></input>
                <label htmlFor='shirts'>Shirts</label>
              </div>
              <div className='optionButtons'>
                <input type='checkbox' id='formals' value={'formals'}></input>
                <label htmlFor='formals'>Formals</label>
              </div>
            </>}
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
                  <option id='optn' onClick={() => sortAsc()}>Price: Low to High</option>
                  <option id='optn' onClick={() => sortDesc()}>Price: High to Low</option>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="productLists">
          {
            category === 'kids' ? 

            <>
              <KidsProducts category={category} sort={sortby}/>
            </>

            :

            <>
              <MenProducts category={category} sort={sortby}/>
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default Categories;