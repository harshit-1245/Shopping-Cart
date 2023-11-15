// Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.scss';
import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { FaGithub } from "react-icons/fa6";
import Cart from '../Cart/Cart';
import Search from './Search/Search';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropped,setIsDropped]=useState(false);
  const [showCart,setShowCart]=useState(false);
  const [showSearch,setShowSearch]=useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleDropDownToggle=()=>{
    setIsDropped(!isDropped);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li><FaGithub size={30}/></li>
          <li className={`dropdown ${isDropped ? 'active':''}`}
          onMouseEnter={handleDropDownToggle}
          onMouseLeave={handleDropDownToggle}
          >
            Categories
            {/* <div className={`dropdown-content ${isDropped ? 'visible':''} `}>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </div> */}
          </li>
        </ul>
        <div className="center">HarryStore</div>
        <div className="right">
          <TbSearch  onClick={()=>setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon">
          <CgShoppingCart onClick={() => setShowCart(true)} />
          </span>
        </div>
      </div>
    </header>
   {showCart && <Cart setShowCart={setShowCart}/>}
  {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
