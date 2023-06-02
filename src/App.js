import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./pages/About"
import Booking from "./pages/Booking"
import Services from "./pages/Services"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Trips from "./pages/Trips"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/trips" element={<Trips />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
