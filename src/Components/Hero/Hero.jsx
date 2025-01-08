import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Hero.module.css';

export default class Hero extends Component {
  render () {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    fade:true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className={classes.container}>
      <Slider {...settings} className={classes.slider}>
        <div className={classes.innerContainer}>
          <h1>Welcome to The Unbreakable-Grace Consultancy LTD</h1>
          <p>TUG Consultancy is a new International consultancy poised at connecting people to opportunities and to bring them international study offers.</p>
        </div>

        <div className={classes.innerContainer2}>
          <h1>Study Abroad With Ease!!!</h1>
          <p>We help you through every step of the process to study abroad.</p>
        </div>
        </Slider>
        </div>
  );
}
}
