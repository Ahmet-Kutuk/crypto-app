import React from "react";
import { Toggle, Label, IconItem } from "../../Style/Compoments/ThemeToggle";

function ThemeToggle(props) {
  return (
    <>
      <Toggle
        onClick={props.action}
        type="checkbox"
        id="switch-button"
      ></Toggle>
      <Label htmlFor="switch-button">
        <IconItem
          opacity={1}
          transform={"25px"}
          color={"orange"}
          className="fas fa-sun"
        ></IconItem>
        <IconItem
          opacity={0}
          transform={"0px"}
          color={"white"}
          className="fas fa-moon"
        ></IconItem>
      </Label>
    </>
  );
}

export default ThemeToggle;
