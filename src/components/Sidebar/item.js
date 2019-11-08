/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './style';
// import Button from "@material-ui/core/Button";

export default props => {
  return (
    <Link to={`${props.path}`}>
      <Item active={props.active} onClick={() => props.onSelected(props.index)}>
        <span>{props.icon}</span>
        <h3>{props.title}</h3>
      </Item>
    </Link>
  );
};
