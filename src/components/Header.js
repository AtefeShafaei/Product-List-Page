import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleSearch = () => {
        setIsSearch(prev => !prev);
    }

    
  return (
    <header className="header">
        <div className="container nav-list">

            <div className="right col-md-6 col-sm-1">

                <img src={logo}  title='Logo'/>


                {!isSearch && (
                    <button className="search-btn-res" onClick={handleSearch}>
                        <i className="fas fa-search"></i>
                    </button>
                )}

                <div className={`mobile-search ${isSearch ? 'active' : ''}`}>
                    {isSearch && (
                        <input type="text" className="input-res" placeholder="جستجو" />
                    )}
                </div>

                
                <div className="serach-section">
                    <button className='search-btn'><i className="fas fa-search"></i></button>
                    <input type="text" placeholder="جستجو"/>
                </div>

            </div>

            <button className="burger-menu" onClick={handleToggleMenu}>
                <i className="fas fa-bars"></i>
            </button>


            <div className={`left col-md-6 ${isMenuOpen ? 'open' : ''}`}>
                <a href="#" title='Profile'>
                    <i className="far fa-user"></i>
                </a>
                <a href="#" title='Favorite'>
                    <i className="far fa-heart"></i>
                </a>
                <a href="#" className="cart-btn" title='Basket'>
                    <i className="fas fa-shopping-cart"></i> 
                    <span className="cart-count">0</span>
                </a>
            </div>

        </div>
    </header>
  )
}

export default Header;