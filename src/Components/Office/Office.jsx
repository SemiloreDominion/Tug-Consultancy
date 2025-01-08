import React from 'react'
import classes from './Office.module.css'
import { IoPaperPlane } from "react-icons/io5";

const Office = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.office}>
            <h2>Our Office</h2>
            <div className={classes.officeInfo}>
                <p>Address<br/><span>8, Safebirth street, Fadeyi, Lagos.</span></p>
                <p>Phone Numbers<br/><span>+2349124939094, +2347033181161</span></p>
                <p>Website<br/><span>https://www.unbreakablegraceconsultancy.com</span></p>
                <p>Email<br/><span>unbreakablegraceconsultancy@gmail.com</span></p>
            </div>
        </div>
        <div className={classes.drop}>
            <h2>Drop A Message</h2>
            <form>
                <input type="text" id="first_Name" name="first_Name" placeholder='First Name' required/><br/>
                <input type="text" id="last_Name" name="last_Name" placeholder='Last Name' required/><br/>
                <input type="email" id="email" name="email" placeholder='Email' required/><br/>
                <input type="phone" id="phone_Number" name="phone_Number" placeholder='Phone' required/><br/>
                <input type="text" id="subject" name="subject" placeholder='Subject' required/><br/>
                <div className={classes.dropMessage}>
                  <input type="text" id="message" name="message" placeholder='Message' required/><br/>
                </div>

                <div className={classes.send}>
                  <button><IoPaperPlane />SEND</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Office
