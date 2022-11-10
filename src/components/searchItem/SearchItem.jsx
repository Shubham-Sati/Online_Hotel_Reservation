import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={require("../../All_Images/hotel.jpeg")}
        alt="notFound"
        className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air consitioning</span>
        <span className="siFeatures">Entire studio ◦ 21㎡ 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">you can cancel later, so look in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$1234</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
