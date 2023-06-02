import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner'
import About from './components/About';
import Services from './components/Services';
import Trips from './components/Trips';
import Booking from './components/Booking';
import Feedback from './components/FeedBack';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Trips />
      <Booking />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
