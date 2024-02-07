import React from "react";
import "./style.css";
import "./index.css";
export const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: props.className,
    onClick: () => {
      alert("Test");
    }
  }, props.label);
};