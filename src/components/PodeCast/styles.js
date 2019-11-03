import styled from "styled-components";

export const Content = styled.article`
  width: 200px;
  flex: 1;
  color: #333;
  background-color: #fff;
  padding: 30px 20px;
  margin: 30px 0;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
  cursor: pointer;

  -webkit-box-shadow: -3px 3px 9px 3px rgba(140, 140, 140, 1);
  -moz-box-shadow: -3px 3px 9px 3px rgba(140, 140, 140, 1);
  box-shadow: -3px 3px 9px 3px rgba(140, 140, 140, 1);

  .content-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px 10px 10px 10px;
    /* position: absolute;
        right: 35px;
        left: 35px; */

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  /*
    .icon-pdf {
        position: absolute;
        left: 10px;
    } */

  .icon-fav {
    margin-right: 5px;
  }
  /* .icon-check {
        position: absolute;
        right: 10px;
        margin-left: 5px;
    } */
`;
