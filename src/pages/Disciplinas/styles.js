// import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    fle: 1,
    flexGrow: 1,
    fontSize: 15,
    '@media screen and (max-width: 600px)': {
      display: 'inline-block',
    },
  },
  h1: {
    color: '#3d5170',
    fontSize: '36px',
    // textAlign: 'center',
    lineHeight: '1em',
    fontWeight: '500',
    margin: '100px 0 30px 0',
  },
  h2: {
    color: '#3d5170',
    fontSize: '2.7em',
    lineHeight: '1em',
    fontWeight: '500',
    marginBottom: '30px',
  },
}));
