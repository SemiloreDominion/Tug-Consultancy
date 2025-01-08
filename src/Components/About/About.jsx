import React from 'react'
import classes from './About.module.css';
import People from "../../Assets/People.png";

const About = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div className={classes.aboutText}>
                <h2>About Us</h2>
                <p>The Unbreakable-Grace Consultancy Ltd is a
                    new international consultancy know for its
                    loyalty, respect, patience, quality, honesty
                     and quality. Our goal is to connect people to
                     opportunities, provide them with international
                     study offers (young and old), reduce the rate
                     of illteracy, and connect them to breakthroughs,
                     goods, and services in the major life areas.
                     We provide human scope and international exams,
                     education, and immigration services to people
                     worldwide
                </p>
                <div className={classes.aboutButton}>
                    <button>Learn More</button>
                </div>
            </div>
            <div className={classes.aboutImage}>
                <img src={People} alt="colleagues at work"/>
            </div>
        </div>
    </div>
  )
}

export default About
