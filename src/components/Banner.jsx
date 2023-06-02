import React from "react";
import HalfCircle from "../assets/images/banner-half-circle.png";
import Line from "../assets/images/banner-half-line.png";
import OrangeDots from "../assets/images/orange-dots.png";
import Circle from "../assets/images/circle.png";
import BannerCircle from "../assets/images/banner-circle-img.png";
import secCircle from "../assets/images/second-circle.png";
import Search from "../assets/images/Search.png";

const Banner = () => {
  return (
    <div className="distinct-component padding-bottom">
      <div className="circles">
        <img className="circles-first" src={Circle} alt="" />
        <img className="circles-second" src={secCircle} alt="" />
      </div>

      <div className="container">
        <div className="wrapper banner">
          <div className="entries">
            <h1 className="entries-title">
              Happiness Is <samp className="orange">Travelling</samp>
            </h1>
            <p className="entries-subtitle">
              No matter where in the world you want to go, we can help get you
              there
            </p>
            <p className="entries-text">
              Travel Agency Threats and Opportunities. The Perspective of
              Successful OwnersJoin the leader
            </p>
          </div>

          <div className="banner-img">
            <img className="banner-img_circle" src={BannerCircle} alt="" />
            <img className="banner-img_line" src={Line} alt="" />
            <img className="banner-img_halfcircle" src={HalfCircle} alt="" />
            <img className="banner-img_dots" src={OrangeDots} alt="" />
          </div>
        </div>

        <form className="wrapper inputs-wrapper" action="">
          <div className="inputs">
            <p className="inputs-title">Location</p>
            <input
              type="text"
              className="input"
              placeholder="Where are you going?s"
            />
          </div>
          <div className="inputs">
            <p className="inputs-title">Check In</p>
            <input className="input" type="date" name="" id="" />
          </div>
          <div className="inputs">
            <p className="inputs-title">Check Out</p>
            <input className="input" type="date" name="" id="" />
          </div>
          <button className="inputs-btn">
            Search
            <img className="search" src={Search} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
