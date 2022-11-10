import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={require("../../All_Images/dublin.jpg")}
          alt="notFound"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 property</h2> 
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={require("../../All_Images/russia.jpg")}
          alt="notFound"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>russia</h1>
          <h2>456 property</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={require("../../All_Images/germany.jpg")}
          alt="notFound"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>890 property</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
