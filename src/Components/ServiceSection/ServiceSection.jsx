import React from 'react'
import classes from './ServiceSection.module.css';
import Tuition from "../../Assets/Tuition.png";
import Career from "../../Assets/sectionCareer.png";
import Visa from "../../Assets/Visa.png";
import Scholarship from "../../Assets/Graduands.png";
import Ticket from "../../Assets/Flight.png";
import Counselling from "../../Assets/Counsel.png";
import Exams from "../../Assets/Exams.png";
import Travel from "../../Assets/Travel.png";

const ServiceSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.sections1}>
      <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Tuition} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Low Tuition Study Destination</p>
                  </div>
                  <p>We are interested in helping you get a pocket-friendly
                     offer of low tuition fees. We will (with the client’s
                     budget) get a suitable, quality, and affordable
                     study country.</p>
                </div>

                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Career} alt="Counselling session"/>
                  </div>
                  <div className={classes.section}>
                    <p>Career Coaching & Couselling</p>
                  </div>
                  <p>We give counsel on how things should be properly done,
                    for a successful career, for excellence, and for a
                    worthwhile experience that will place you on top of
                    your career.
                  </p>
                </div>

              </div>

              <div className={classes.sections2}>
                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Visa} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Visa Advisory</p>
                  </div>
                  <p>Giving the best advice on a successful visa application.
                    Help with all documentation needed, give detailed
                    information that gives favorable outcome and towards
                    visa approvals.
                  </p>
                </div>

                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Scholarship} alt="graduands"/>
                  </div>
                  <div className={classes.section}>
                    <p>Scholarship to Study Abroad</p>
                  </div>
                  <p>It is not news anymore that there are opportunities to
                    study abroad based on scholarships. We help in getting
                    scholarships on tuition/partial scholarships to study abroad.
                  </p>
                </div>

              </div>

              <div className={classes.sections3}>
                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Ticket} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Ticketing</p>
                  </div>
                  <p>Talking about tickets, we help in the booking
                    of international and local flight.
                  </p>
                </div>

                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Counselling} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Private Coaching & Counselling</p>
                  </div>
                  <p className={classes.special}>Private coaching is a client-driven process which
                    means that you can work on anything that you feel
                    you need support within your carrer or life. We
                    take an inside-out approach to spend the time to
                    get to know you and give everything about you a
                    touch of excellence. with us, there is no set-back.
                  </p>
                </div>

              </div>

              <div className={classes.sections4}>
                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Exams} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Int’l Exams Registration & Preparation</p>
                  </div>
                  <p>We deal with international examinations such as
                    TOEFL, SAT, IELTS, GRE, etc. We also help in preparing
                    you adequately.
                  </p>
                </div>

                <div className={classes.sSection}>
                  <div className={classes.sSectionImage}>
                    <img src={Travel} alt="graduation cap, dollars and scroll"/>
                  </div>
                  <div className={classes.section}>
                    <p>Immigration Travel</p>
                  </div>
                  <p>We help you with your travelling proccess with
                    any country of your choice.
                  </p>
                </div>

              </div>



      </div>
    </div>
  )
}

export default ServiceSection
