// import styled from "styled-components";
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    fontSize: 15,
    padding: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: ' column',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '.625rem',
  },
  h1: {
    color: '#3d5170',
    fontSize: '30px',
    // lineHeight: '1em',
    fontWeight: '500',
    // marginRight: 100,
  },
  video: {
    borderRadius: '10px',
    boxShadow: '0px 2px 9px 0px rgba(0,0,0,0.84)',
  },
  check: {
    margin: '0 0 0 20px',
    verticalAlign: 'baseline',
    // display: 'fex',
    // padding: '0 0 0 20px',
    // flexDirection: 'row',
    // alignItems: 'stretch',
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    padding: '0 0 0 20px',
  },
  // h2: {
  //   color: "#3d5170",
  //   fontSize: "2.7em",
  //   lineHeight: "1em",
  //   fontWeight: "500",
  //   marginBottom: "30px"
  // }
}));
export const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
