import React from 'react'
import classes from "./Values.module.css";
import Loyal from "../../Assets/Loyalty.png";
import Excel from "../../Assets/Excellence.png";
import Communicate from "../../Assets/Communication.png";

const Values = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>Our Core values</h2>
        <div className={classes.value}>
        <div className={classes.loyalty}>
          <img src={Loyal} alt="tag"/>
          <h3>Loyalty</h3>
          <p>For us as a company, it is very important that
             the information provided to our customers is
             honest and true. This value is, what makes us
             different and helps us to  make decisions
             based on firm and true facts.</p>
        </div>
        <div className={classes.excellence}>
          <img src={Excel} alt="circles"/>
          <h3>Excellence</h3>
          <p>We provide services that constantly meet and occasionally even exceed customer’s expectations.</p>
        </div>
        <div className={classes.communication}>
          <img src={Communicate} alt="wireless network icon"/>
          <h3>Communication</h3>
          <p>Each one of us must interact transparently
             and appropriately, trying to strengthen our
             interpersonal relations and the image of
             the company.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Values
