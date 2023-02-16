import {
  faArrowDown,
  faBell,
  faHeart,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Icon.scss";

export const Bell = (props) => {
  <FontAwesomeIcon icon={faBell} className={`icon ${props.customClass}`} />;
};
export const Spinner = (props) => {
  <div className="spinner__Wrap">
    <FontAwesomeIcon
      icon={faSpinner}
      className={`icon ${props.customClass}`}
      size={props.size}
      spin
    />
  </div>;
};
export const Heart = (props) => (
  <FontAwesomeIcon icon={faHeart} className={`${props.customClass}`} />
);

export const Plus = (props) => (
  <FontAwesomeIcon icon={faPlus} className={`${props.customClass}`} />
);

export const ArrowDown = (props) => (
  <FontAwesomeIcon icon={faArrowDown} className={`${props.customClass}`} />
);
