import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from "../../assets/scale.png";
import './navbar.css';

const Menu = () => (
    <>
        <div>
            <Link to="customers">Customers</Link>
            <Link to="pricing">Pricing</Link>
            <Link to="resources">Resources</Link>
            <Link to="about">Company</Link>
        </div>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="scale__navbar">
            <div className="scale__navbar-logo">
                <Link to="/"><img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="scale__navbar-links">
                <div className="scale__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="scale__navbar-links_container end-links">
            <Link to="sales">Talk To Sales</Link>
            <Link to="#">Sign Up</Link>
        </div>
            <div className="scale__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="scale__navbar-menu_container scale-up-center">
                        <div className="scale__navbar-menu-links"></div>
                        <Menu />
                    </div>
                )}
            </div>
        </div>
    )
};

export default Navbar;