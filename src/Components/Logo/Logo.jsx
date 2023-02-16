import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/react.svg";
import "./Logo.scss";

export const Logo = () => (
  <Link to="/">
    <img className="logo__Svg" src={logo} alt="site-logo">
      <title id="site-home">Unsplash Home</title>
    </img>

    {/* <svg
      className="logo__Svg"
      version="1.1"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
    >
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
      <title id="unsplash-home">Unsplash Home</title>
    </svg> */}
  </Link>
);
