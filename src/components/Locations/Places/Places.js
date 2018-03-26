import React, { Component } from "react";
import "./Places.css";

const Places = props => {
  return (
    <div className="placeList">
      <p>{props.nam}</p>
      <p>{props.addy}</p>
      <p>
        {props.cit}, {props.st}
      </p>
    </div>
  );
};

export default Places;
