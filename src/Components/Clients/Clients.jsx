import React from 'react'
import classes from './Clients.module.css';
import Obi from '../../Assets/Obi.png';
import Oloruntola from '../../Assets/Oloruntola.png';
import Joseph from '../../Assets/Joseph.png';

const Clients = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>What our Clients say about us</h2>

        <div className={classes.clientText}>
          <div className={classes.clientText1}>
            <h6>TUG Consultancy is one of the best agencies
              in Nigeria. They have the best services and
              they are also transparent, hospitable and
              professional. I will recommend TUG consultancy
              for anyone who wants to travel and study abroad.
            </h6>
            <div className={classes.clientImage1}>
              <img src={Oloruntola} alt="man"/>
            </div>
            <p>Oloruntola Tobiloba</p>
          </div>

          <div className={classes.clientText2}>
            <h6>I’m grateful i made my admission process
              to study abroad with TUG consultancy, they
              put me through proper steps and i am happy,
              there is a difference in my life today.
            </h6>
            <div className={classes.clientImage2}>
              <img src={Obi} alt="woman"/>
            </div>
            <p>Obi Grace</p>
          </div>

          <div className={classes.clientText3}>
            <h6>I found out about TUG consultancy from a friend.
              I reached out to them after that and they have been
              wonderful all through my application processing.
            </h6>
            <div className={classes.clientImage3}>
              <img src={Joseph} alt="man"/>
            </div>
            <p>Joseph Adeleke</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Clients
