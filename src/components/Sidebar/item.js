/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Item } from "./style";
// import Button from "@material-ui/core/Button";

export default props => {
  return (
    <Item active={props.active} onClick={() => props.onSelected(props.index)}>
      <span>{props.icon}</span>
      <h3>{props.title}</h3>
    </Item>
  );
};
