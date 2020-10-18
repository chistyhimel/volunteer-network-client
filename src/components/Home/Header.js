import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from './Banner';
import "./Home.css"

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Header;