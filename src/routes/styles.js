import styled from 'styled-components';

const RouterStyle = styled.section`
  background-color: #eaeaea;
  width: 100%;
  margin-left: 100px;

  /* transform: translateX(100px); */
  /* margin-top: 63.36px; */
  @media only screen and (max-width: 500px) {
    margin-left: ${props => (sideBar ? '100px' : '0px')};
    /* transition-duration: 4s;
      transition-timing-function: ease-in;
      transition-property: all; */
  }
`;
export default RouterStyle;
