import React from 'react';
import './Navigation.css'

import { BiSearch } from 'react-icons/bi';



const BottomNavbar = () => {
  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto">
      <div className="navbar-start">
        <a href="#" className="logo-icon">Blushlly</a>
      </div>
      <div className="navbar-center">
        <ul className="flex items-center">
          <li><a href="#" className="middle-navlink-icon">Home</a></li>
          <li><a href="#" className="middle-navlink-icon">Categories</a></li>
          <li><a href="#" className="middle-navlink-icon">Make Up</a></li>
          <li><a href="#" className="middle-navlink-icon">Blog</a></li>
          <li><a href="#" className="middle-navlink-icon">About</a></li>
          <li><a href="#" className="middle-navlink-icon">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
          <button className="search-button">
            <BiSearch></BiSearch>
          </button>
        </div>
      </div>

    </div>
  );
};

export default BottomNavbar;