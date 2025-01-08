import React from 'react';
import classes from "./Header.module.css"
import Logo from "../../Assets/TUG Logo.png";
import {Link, NavLink} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <header>
            <div className={classes.Logo}>
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
            <nav className={classes.navBar}>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/aboutUs">
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contactUs">
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/servicesPage">
                        Our Services
                    </NavLink>
                </li>
            </nav>
            <div className={classes.socials}>
                <li><FaFacebook /></li>
                <li><FaSquareInstagram /></li>
                <li><AiFillTwitterCircle /></li>
            </div>
            </header>
        </div>
    </div>
  )
}

export default Header
