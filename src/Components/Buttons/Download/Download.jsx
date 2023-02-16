import React from "react";
import { ArrowDown } from "../../Icons/Icon";
import Button from "../Button";

const Download = (props) => {
  return (
    <a href={props.download} target="_blank" rel="noopener noreferrer" download>
      <Button
        customStyle={{ width: "40px", hight: "32px", marginRight: "16px" }}
      >
        <ArrowDown />
      </Button>
    </a>
  );
};
export default Download;
