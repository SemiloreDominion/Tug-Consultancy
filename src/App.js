import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Router from '../src/Router.js';
import Footer from './Components/Footer/Footer';
import Clients from './Components/Clients/Clients.jsx';
import Partners from './Components/Partners/Partners.jsx';
 
const App = () => {
   return(
      <div className="Work">
         <Header/>
         <Router/>
         <Clients/>
         <Partners/>
         <Footer/>
      </div>
   );
};
 
export default App;