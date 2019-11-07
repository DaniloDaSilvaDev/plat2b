import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 70px;
  flex: 1;
  max-width: 200px;
  width: 100px;
  height: 100%;
  max-height: 100vh;
  background-color: #222d32;
  z-index: 999;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Item = styled.li`
  flex: 1;
  width: 100%;
  margin: auto;
  padding: 10px;
  vertical-align: middle;
  text-align: center;
  color: #fff;
  background-color: ${props =>
    props.active ? 'rgb(30,30,30)' : 'transparent'};
  ${props =>
    props.active ? 'border-left: solid 3px #4DA75A; ' : 'transparent'};

  user-select: none;
  cursor: pointer;

  ${props => (props.active ? '' : '&:hover {background-color: rgb(30,30,30);}')}

  span {
    font-size: 1.5rem;
    color: white;
  }

  h3 {
    margin-top: 0px;
  }
`;
export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: auto;
`;
