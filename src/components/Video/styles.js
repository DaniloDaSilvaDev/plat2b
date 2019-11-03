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
  flex-wrap: wrap;
  cursor: pointer;

  -webkit-box-shadow: -3px 3px 9px 3px rgba(171, 171, 171, 1);
  -moz-box-shadow: -3px 3px 9px 3px rgba(171, 171, 171, 1);
  box-shadow: -3px 3px 9px 3px rgba(171, 171, 171, 1);

  .content-text {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 10px 10px 10px;

    h1 {
      font-size: 24px;
    }

    .content-thunb {
      p {
        font-size: 15px;
        padding: 0 10px 10px 0 10px;
        margin-top: 20px;
      }
      img {
        border-radius: 4px;
        width: 250px;
        margin: 20px 5px;
        float: right;
      }
    }
  }

  /* .icon-pdf {
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
