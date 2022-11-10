import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={require("../../All_Images/hut1.jpeg")}
          alt="notFound"
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={require("../../All_Images/hut2.jpeg")}
          alt="notFound"
          className="fpImg"
        />
        <span className="fpName">Miasto</span>
        <span className="fpCity">Russia</span>
        <span className="fpPrice">Starting from $50</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={require("../../All_Images/hut3.jpeg")}
          alt="notFound"
          className="fpImg"
        />
        <span className="fpName">Stare</span>
        <span className="fpCity">Germany</span>
        <span className="fpPrice">Starting from $20</span>
        <div className="fpRating">
          <button>6.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={require("../../All_Images/hut4.jpeg")}
          alt="notFound"
          className="fpImg"
        />
        <span className="fpName">Apprite</span>
        <span className="fpCity">New York</span>
        <span className="fpPrice">Starting from $70</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
