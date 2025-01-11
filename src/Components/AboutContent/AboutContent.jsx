import React from 'react'
import classes from './AboutContent.module.css'
import { LuDot } from "react-icons/lu";

const AboutContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.about}>
            <p>The Unbreakable-Grace Consultancy Ltd is
            a new international consultancy know for
            its loyalty, respect, patience, quality,
            honesty, and quality. Our goal is to connect
            people to opportunities, provide them with
            international study offers (young and old),
            reduce the rate of illteracy, and connect them
            to breakthroughs, goods, and services in the
            major life areas. We provide human scope and
            international exams, education, and immigration
            services to people worldwide.
            </p>
        </div>

        <div className={classes.goals}>
            <h6>OUR GOALS</h6>
            <ul>
                <li><LuDot />To bring quality and affordable education to people in the whole Africa. </li>
                <li><LuDot />To serve as the connection connecting people to scholarship offers available globally.</li>
                <li><LuDot />To facilitate students intellectual growth by exposing them to knowledge</li>
            </ul>
        </div>

        <div className={classes.coreValues}>
            <p><span>CORE VALUES:</span> Loyalty, Excellence</p>
        </div>

        <div className={classes.vision}>
        <p><span>OUR VISION:</span> Develop Independence, Self-confidence and Flexibility</p>
        </div>

        <div className={classes.business}>
          <h6>BUSINESS TARGET FOR 2022</h6>
          <p>We shall be targeting recruiting at least,
            100 students to study in the united States,
            100  students to study in the UK, minimum of
            500 students to study in Europe generally 200
            students to study in the Asia (This is our basic
            business target for this year).
            </p>
        </div>

      </div>
    </div>
  )
}

export default AboutContent
