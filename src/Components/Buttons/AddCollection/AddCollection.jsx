import React from "react";
import Button from "../Button.jsx";

const AddCollection = (props) => {
  return (
    <Button
      customStyle={{
        width: "80px",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}
    >
      {props.children}
    </Button>
  );
};
export default AddCollection;
