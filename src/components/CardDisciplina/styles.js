import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexGrow: 1,
    fontSize: 15,
    padding: 20,
  },
  control: {
    padding: theme.spacing(4),
  },
  paper: {
    position: 'relative',
    minHeight: 250,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: ' column',
    flexWrap: 'nowrap',
    border: 'none',
    borderRadius: '.625rem',
    boxShadow:
      '0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);',
    transition: '300ms',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  img: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '.625rem',
    minHeight: 250,
    display: 'flex',
    flexDirection: ' column',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    transition: '300ms',
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
    paddingLeft: 30,
    color: '#fff',
    fontSize: '28px',
    lineHeight: '40px',
    fontWeight: 'bold',
    transform: 'translateY(400%)',
    transition: '300ms',
    marginBotton: 10,
  },
  desc: {
    padding: '0 30px 30px 30px',
    color: '#fff;',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'left',
    margin: '10px 0 ',
    transform: 'translateY(-220%)',
    transition: '300ms',
  },
  caixa: {
    width: '100%',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    minHeight: '100%',
    cursor: 'pointer',
  },
}));

export const CardBody = styled.div`
  position: relative;
  transition: 300ms;
  div:hover {
    p {
      transform: translateY(0%);
      margin-top: 30px;
    }
  }

  div:hover {
    h1 {
      transform: translateY(40%);
    }
  }

  div:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 6px;
    cursor: pointer;
  }
  div:before:hover {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
