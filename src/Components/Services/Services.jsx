import React from 'react'
import classes from "./Services.module.css"
import Tuition from "../../Assets/Tuition.png";
import Career from "../../Assets/Counselling.png";
import Visa from "../../Assets/Passport.png";

const Services = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.serviceText}>
          <h2>We Offer Best Services</h2>
          <p>See All</p>
        </div>
        <div className={classes.service}>

          <div className={classes.service1}>
            <div className={classes.serviceImage}>
              <img src={Tuition} alt="graduation cap, dollars and scroll"/>
            </div>
            <div className={classes.serviceT1}>
              <p>Low Tuition Study Destination</p>
            </div>
            <p>We are interested in helping you get a pocket-friendly
               offer of low tuition fees. We will (with the client’s
               budget) get a suitable, quality, and affordable
               study country.</p>
          </div>

          <div className={classes.service1}>
            <div className={classes.serviceImage}>
              <img src={Career} alt="Counselling session"/>
            </div>
            <div className={classes.serviceT2}>
              <p>Career Coaching & Couselling</p>
            </div>
            <p>We give counsel on how things should be properly done,
              for a successful career, for excellence, and for a worthwhile
              experience that will place you on top of your career.</p>
          </div>

          <div className={classes.service1}>
            <div className={classes.serviceImage}>
              <img src={Visa} alt="Passport"/>
            </div>
            <div className={classes.serviceT3}>
              <p>Visa Advisory</p>
            </div>
            <p>Giving the best advice on a successful visa application.
              Help with all documentation needed, give detailed information
              that gives favorable outcome and towards visa approvals.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
