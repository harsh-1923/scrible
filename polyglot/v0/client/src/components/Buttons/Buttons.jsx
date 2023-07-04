import React from "react";
import "./Button.css";
const Buttons = ({ type }) => {
  return (
    <button className="button-comp-wrapper" type={type}>
      {label}
    </button>
  );
};

export default Buttons;
