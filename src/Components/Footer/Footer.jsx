import React from 'react'
import classes from './Footer.module.css';
import Logo2 from "../../Assets/Logo2.png";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
      <div className={classes.innerContainer}>
        <div className={classes.footLeft}>
        <div className={classes.footLogo}>
          <img src={Logo2} alt="Logo"/>
        </div>
        <div className={classes.footText}>
          <p>TUG Consultancy is a new International consultancy poised at connecting people to opportunities and to bring them international study offers.</p>
        </div>

        <div className={classes.footInfo}>
          <p><GrLocation />8, Safebirth Street, Fadeyi Lagos</p>
          <p><BiPhoneCall />+2347033181161</p>
          <p><FaWhatsapp />+2349124939094, +2347033181161</p>
        </div>
        </div>

        <div className={classes.footRight}>
          <div className={classes.quick}>
          <h5>Quick Links</h5>
          <Link to="/"><p>Home</p></Link>
          <Link to="/aboutUs"><p>About</p></Link>
          <Link to="/contactUs"><p>Contact</p></Link>
          <Link to="/servicesPage"><p>Services</p></Link>
          </div>

          <div className={classes.follow}>
            <h5>Follow us</h5>
            <div className={classes.followIcon}>
              <p><FaFacebook /></p>
              <p><FaSquareInstagram /></p>
              <p><AiFillTwitterCircle /></p>
            </div>
          </div>

          <div className={classes.email}>
              <h5>Email</h5>
              <p>unbreakablegraceconsultancy@gmail.com</p>
            </div>
        </div>

      </div>
      <hr/>
        <p id={classes.copyright}><RiCopyrightLine />2022 TUG Consultancy Limited</p>
      </footer>
    </div>
  )
}

export default Footer
