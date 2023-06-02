import React from "react";
import Illustrator from "../assets/images/illustration.png";
import Car from "../assets/images/car.png";
import Discount from "../assets/images/discount.png";
import Guide from "../assets/images/guide.png";
import Support from "../assets/images/support.png";

const About = () => {
  return (
    <div className="wrapper about-component">
      <img src={Illustrator} alt="" className="illustrator" />

      <div className="about-info">
        <div className="entries about-entries">
          <p className="title">Why Choose Us?</p>
          <p className="entries-text">
            There was consensus, not surprisingly, that quality traditional
            travel agencies provide value for money. However, this was
            accompanied by a high level of concern that many consumers
          </p>
        </div>

        <div className="about-services">
          <div className="wrapper about-services_card">
            <img className="card-car" src={Car} alt="" />

            <div className="entries about-card_entries">
              <p className="entries-title about-card_title">Airport Car</p>
              <p className="entries-text">
                There was consensus, not surprisingly, that quality traditional
                travel agencies
              </p>
            </div>
          </div>
          <div className="wrapper about-services_card">
            <img className="card-car" src={Support} alt="" />

            <div className="entries about-card_entries">
              <p className="entries-title about-card_title">24/7 Support</p>
              <p className="entries-text">
                There was consensus, not surprisingly, that quality traditional
                travel agencies
              </p>
            </div>
          </div>
          <div className="wrapper about-services_card">
            <img className="card-car" src={Discount} alt="" />

            <div className="entries about-card_entries">
              <p className="entries-title about-card_title">Special Discount</p>
              <p className="entries-text">
                There was consensus, not surprisingly, that quality traditional
                travel agencies
              </p>
            </div>
          </div>
          <div className="wrapper about-services_card">
            <img className="card-car" src={Guide} alt="" />

            <div className="entries about-card_entries">
              <p className="entries-title about-card_title">Tour Guide</p>
              <p className="entries-text">
                There was consensus, not surprisingly, that quality traditional
                travel agencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
