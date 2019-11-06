import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
// import img from '../../assets/teste1.jpg';

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
    position: 'relative',
    minHeight: 250,
    // borderRadius: '10px',
    // backgroundImage: `url(${img})`,
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
      transform: 'scale(1.05)',
    },
  },
  img: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: '50%',
    borderRadius: '.625rem',
    minHeight: 250,
    display: 'flex',
    flexDirection: ' column',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    transition: '300ms',
    // background: 'rgba(0, 0, 0, 0.4)',
    // '&:hover': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // },
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
    fontSize: '30px',
    lineHeight: '40px',
    fontWeight: 'bold',
    transform: 'translateY(400%)',
    transition: '500ms',
    marginBotton: 10,
  },
  desc: {
    paddingLeft: 30,
    color: '#fff;',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'left',
    margin: '10px 0 ',
    transform: 'translateY(-220%)',
    transition: '500ms',
  },
  caixa: {
    // padding: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    overflow: 'hidden',
    minHeight: '100%',
    cursor: 'pointer',
  },
}));

export const CardBody = styled.div`
  /* padding: 2.1875rem 1.5625rem; */
  position: relative;
  transition: 500ms;
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
    /* background-color: rgba(0, 0, 0, 0.4);
     */
    cursor: pointer;
  }
  div:hover:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
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
