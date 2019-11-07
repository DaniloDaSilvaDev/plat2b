import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
// import { FaSearch } from 'react-icons/fa';
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    height: 70,
  },
}));
export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #4da75a;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media only screen and (max-width: 414px) {
    #iconSearch {
      display: none;
    }
  }

  @media only screen and (min-width: 500px) {
    #menuIcon {
      display: none;
    }
  }

  #menuIcon {
    cursor: pointer;
    width: 50px;
  }

  .fa-envelope {
    font-size: 21px;
    cursor: pointer;
  }

  .fa-bell {
    font-size: 21px;
    margin-right: -6x;
    cursor: pointer;
  }

  /* .notifcationLI {
        position: absolute;
        top: 0;
        right: 237px;
    } */

  .notification {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 7px;
    top: 10px;
    @media only screen and (max-width: 414px) {
      right: -7px;
    }
  }
`;

export const List = styled.ul`
  /* width: 100%; */
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;

  @media only screen and (max-width: 414px) {
    .itemsMENU {
      padding-right: 0px;
      padding-left: 10px;
    }
  }
  @media only screen and (max-width: 414px) {
    .nameUSER {
      display: none;
    }
  }
`;
export const Item = styled.li`
  padding: 20px 20px 20px 10px;
  color: #fff;
  position: relative;
  display: flex;

  /* .nameUSER {
    padding-left: 20px;
    top: 20%;
  } */
  #logo2b {
    width: 80px;
    margin-right: 100px;
  }

  @media only screen and (max-width: 414px) {
    margin-right: 35px;
  }

  @media only screen and (max-width: 414px) {
    #menuIcon {
      margin-right: 40px;
    }
  }

  @media only screen and (max-width: 360px) {
    #menuIcon {
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 320px) {
    #menuIcon {
      margin-right: -10px;
    }
  }

  /* @media only screen and (max-width: 320px) {
        margin-right: 140px;
    } */
  @media only screen and (max-width: 414px) {
    padding-right: 0px;
  }
  #fa-search {
    position: absolute;
    top: 30px;
    margin-left: 10px;
    @media only screen and (max-width: 414px) {
      display: none;
    }
  }
  input {
    width: 350px;
    height: 30px;
    border-radius: 14px;
    border: solid 2px #fff;
    background: transparent;
    outline: none;
    padding: 8px;
    transition: 0.3s;
    font-size: 16px;
    margin-right: 400px;
    @media only screen and (max-width: 1300px) {
      width: 250px;
      margin-right: 200px;
    }
    @media only screen and (max-width: 1000px) {
      width: 150px;
      margin-right: 0px;
    }
    @media only screen and (max-width: 414px) {
      display: none;
    }
  }
  input:focus {
    color: #fff;
    font-weight: bold;
    box-shadow: 0 0 8px 0 #fff;
    padding-left: 30px;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-right: -25px;
    text-align: right;
    padding-left: 20px;
    top: 20%;
  }
  .photoProfile {
    width: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
    margin-left: 50px;
    @media only screen and (max-width: 414px) {
      margin-right: 10px;
    }
  }
`;
