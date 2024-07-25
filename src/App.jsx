import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marques from "./Components/Marques";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-full  bg-zinc-900 font-['satoshi] ">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
    <Footer/>
    </div>
  );
};

export default App;
