import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderBanner from "./components/HeaderBanner";
import About from "./components/About";
import Services from "./components/Services";
import Trips from "./components/Trips";
import Booking from "./components/Booking";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBanner />
      <About />
      <Services />
      <Trips />
      <Booking />
      <Feedback />
      <Footer />
      
    </>
  );
}

export default App;
