import React from "react";
import "./Photos.scss";

const SearchPhotos = (props) => {
  return <div className="photos__Search">{props.query}</div>;
};

export default SearchPhotos;
