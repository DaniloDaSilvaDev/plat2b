/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
// import styled from "styled-components";
import React from 'react';
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

export const useStyles = makeStyles(theme => ({
  root: {
    fle: 1,
    flexGrow: 1,
    fontSize: 15,
    // padding: 40,
    marginTop: 30,
  },
  h1: {
    color: '#3d5170',
    fontSize: '45px',
    lineHeight: '1em',
    fontWeight: 'bold',
    margin: '60px 0',
  },
  h2: {
    color: '#3d5170',
    fontSize: '36px',
    lineHeight: '1em',
    fontWeight: '500',
    margin: '100px 0 0 0',
  },
  p: {
    color: '#3d5170',
    fontSize: '3em',
  },
}));

// export const GreenCheckbox = withStyles({
//   root: {
//     color: black[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })(props => <Checkbox color="default" {...props} />);

export const GreenCheckbox = withStyles({
  root: {
    color: '#22262A',
    '&$checked': {
      color: '#22262A',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const BlueCheckbox = withStyles({
  root: {
    color: '#43B9D8',
    '&$checked': {
      color: '#43B9D8',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const RedCheckbox = withStyles({
  root: {
    color: '#6B63ED',
    '&$checked': {
      color: '#6B63ED',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const OrangeCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const Filtro = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
`;
