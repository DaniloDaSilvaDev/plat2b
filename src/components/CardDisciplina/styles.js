import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/teste1.jpg';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexGrow: 1,
    fontSize: 15,
    padding: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    position: 'relative',
    minHeight: 250,
    // borderRadius: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: ' column',
    flexWrap: 'nowrap',
    border: 'none',
    borderRadius: '.625rem',
    boxShadow:
      '0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);',
    transition: '500ms',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  img: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '.625rem',
    minHeight: 250,
    display: 'flex',
    flexDirection: ' column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    transition: '500ms',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    cursor: 'pointer',
  },
  category: {
    color: '#fff',
    top: '.9375rem',
    left: 22,
    position: 'absolute',
    textTransform: 'uppercase',
    borderRadius: '10rem',
    padding: '.375rem .5rem',
  },

  title: {
    color: '#fff',
    fontSize: '30px',
    lineHeight: '1em',
    fontWeight: 'bold',
    transform: 'translateY(100%)',
    transition: '300ms',
  },
  desc: {
    color: '#fff;',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    margin: '10px 0 20px 0',
    transform: 'translateY(220%)',
    transition: '500ms',
  },
  icons: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

export const CardBody = styled.div`
  /* padding: 2.1875rem 1.5625rem; */
  transition: 500ms;
  div:hover {
    h1,
    p {
      transform: translateY(0%);
    }
  }

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
