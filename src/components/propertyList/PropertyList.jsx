import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={require("../../All_Images/hotel.jpeg")}
          alt="notFound"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 Hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={require("../../All_Images/apartments.webp")}
          alt="notFound"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>143 Apartment</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={require("../../All_Images/resorts.jpg")}
          alt="notFound"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>508 Resort</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={require("../../All_Images/villas.jpg")}
          alt="notFound"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>157 Villa</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={require("../../All_Images/cabins.jpg")}
          alt="notFound"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>167 Cabin</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
