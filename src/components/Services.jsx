import React from "react";
import BookHotel from "../assets/images/BookHotel.png";
import BookPlane from "../assets/images/BookPlane.png";
import BookTaxi from "../assets/images/BookTaxi.png";
import GlobalTour from "../assets/images/GlobalTour.png";

const Services = () => {
  return (
    <div className="container">
      <div className="entries titles-component">
        <p className="entries-text">Best Services</p>
        <p className="title">Our Services</p>
        <p className="entries-text services-text">
          There was consensus, not surprisingly, that quality traditional travel
          agencies provide value for money. However, this was accompanied by a
          high level of concern that many consumers
        </p>
      </div>

      <div className="wrapper margin-bottom">
        <div className="wrapper-card">
          <img className="card-img" src={BookHotel} alt="" />

          <p className="title">Book Hotel</p>
          <p className="entries-text card-text">
            In-depth interviews with 19 owners of exceptionally successful
            US-based conventional travel agencies
          </p>
          <button className="orange-btn">Explore More</button>
        </div>
        <div className="wrapper-card">
          <img className="card-img" src={BookTaxi} alt="" />

          <p className="title">Book Taxi</p>
          <p className="entries-text card-text">
            In-depth interviews with 19 owners of exceptionally successful
            US-based conventional travel agencies
          </p>
          <button className="orange-btn">Explore More</button>
        </div>
        <div className="wrapper-card">
          <img className="card-img" src={BookPlane} alt="" />

          <p className="title">Book Plane</p>
          <p className="entries-text card-text">
            In-depth interviews with 19 owners of exceptionally successful
            US-based conventional travel agencies
          </p>
          <button className="orange-btn">Explore More</button>
        </div>
        <div className="wrapper-card">
          <img className="card-img" src={GlobalTour} alt="" />

          <p className="title">Global Tour</p>
          <p className="entries-text card-text">
            In-depth interviews with 19 owners of exceptionally successful
            US-based conventional travel agencies
          </p>
          <button className="orange-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
