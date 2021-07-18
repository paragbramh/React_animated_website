import React from 'react';
import web from "../src/images/img2.svg";
// eslint-disable-next-line
 import { NavLink } from 'react-router-dom';
 import Common from './Common';
const Home=()=>{

    return( 
      <>
    <Common
      name='Grow your Bussines with' 
      imgsrc={web} 
      visit='/service'
      btname="Get Started" />
      </>
    );
  }
  
  export default Home;