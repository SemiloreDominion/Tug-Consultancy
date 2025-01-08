import React from 'react'
import classes from './Partners.module.css';
import Kibu from "../../Assets/Kibu.png";
import Halic from "../../Assets/Halic.png";
import Medipol from "../../Assets/Medipol.png";
import European from "../../Assets/European.png";
import Rauf from "../../Assets/Rauf.png";
import Warsaw from "../../Assets/Warsaw.png";

const Partners = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>Our Few Partner Institutions</h2>
        <div className={classes.partImage}>
        <img src={Kibu} alt="Logo"/>
        <img src={Halic} alt="Logo"/>
        <img src={Medipol} alt="Logo"/>
        <img src={European} alt="Logo"/>
        <img src={Rauf} alt="Logo"/>
        <img src={Warsaw} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}

export default Partners
