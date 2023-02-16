import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={props.customClass} style={props.customStyle}>
      {props.children}
    </button>
  );
};

export default Button;
