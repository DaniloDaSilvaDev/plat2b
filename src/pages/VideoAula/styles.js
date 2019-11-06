import styled from 'styled-components';
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
    padding: 50,
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: 20,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: ' column',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    border: '#cecece',
    borderRadius: '.625rem',
    boxShadow:
      '0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);',
  },
  h1: {
    color: '#3d5170',
    fontSize: '30px',
    // lineHeight: '1em',
    fontWeight: '500',
    // marginRight: 100,
  },
  video: {},
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

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0 30px 0;
  /* width: 200px;
  flex: 1; */

  /* background-color: #fff; */
  /* padding: 30px 20px; */
  /* margin: 30px 0;
  border-radius: 20px; */
  /* display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap; */
`;
