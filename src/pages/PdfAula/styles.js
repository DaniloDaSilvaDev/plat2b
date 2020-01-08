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
    padding: '50px 130px',
    '@media screen and (max-width: 1250px)': {
      padding: 20,
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: 35,
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
    fontSize: 40,
    fontWeight: 500,
    '@media screen and (max-width: 1200px)': {
      fontSize: 30,
    },
  },
  check: {
    margin: '0 0 0 20px',
    verticalAlign: 'baseline',
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    padding: '0 0 0 20px',
  },
  p: {
    color: '#3d5170',
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 500,
    margin: '50px 0',
    textAlign: 'justify',
  },
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

export const VideoBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 0 30px 0;
`;
