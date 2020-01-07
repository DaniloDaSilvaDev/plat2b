import styled from 'styled-components';

const RouterStyle = styled.section`
  background-color: #eaeaea;
  width: 100%;
  margin-left: 100px;

  @media only screen and (max-width: 500px) {
    margin-left: ${props => (sideBar ? '100px' : '0px')};
  }
`;
export default RouterStyle;
