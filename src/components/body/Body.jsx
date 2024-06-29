import Product1 from "../parts/Product1";
import Product2 from "../parts/Product2";
import Product3 from "../parts/Product3";
import Footer from "../footer/Footer";
import Rental from "../others/Rental";

import Landing from "./Landing"
import React from 'react'

const Body = () => {
  return (
    <div>
        <Landing/>
        <Product1/>
        <Product2/>
        <Product3/>
        <Rental/>
        <Footer />
      
    </div>
  )
}

export default Body
