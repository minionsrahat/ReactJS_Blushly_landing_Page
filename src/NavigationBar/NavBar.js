import React from 'react';
import UpperNavBar from './UpperNavBar';
import BottomNavbar from './BottomNavbar';
import './Navigation.css'

const NavBar = () => {
    return (
        <div>
           <UpperNavBar></UpperNavBar> 
           <div className="nav-divider mx-auto" />
           <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default NavBar;