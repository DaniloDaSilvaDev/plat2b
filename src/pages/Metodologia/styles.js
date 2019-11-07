import styled from 'styled-components';

export const Container = styled.div`
  .about {
    @import url('https://fonts.googleapis.com/css?family=Rubik:300,400');
    background-color: #2c303a;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    color: #888888;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 300;
    z-index: 3;
    border-bottom: solid 1px #131418;

    a {
      color: white;
      margin: 0 5px;
      padding: 2px 3px;
      text-decoration: none;
      position: relative;
      transition: all 0.3s ease;
      z-index: 1;
      display: flex;
      align-items: center;
      &:after {
        content: '';
        position: absolute;
        width: calc(100% - 6px);
        height: 1px;
        background-color: #46b7a7;
        bottom: 0;
        transition: all 0.3s ease;
      }
      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0px;
        background-color: #46b7a7;
        right: 0;
        bottom: 0;
        transition: all 0.3s 0.3s ease;
        z-index: -1;
      }

      &:hover {
        &:after {
          width: 0;
          left: 0;
        }

        &:before {
          width: 100%;
          height: 100%;
          left: 0;
        }
      }
    }

    .one {
      width: 2px;
      height: 20px;
      background-color: #444857;
      margin: 0 10px 0 5px;
    }
    .two {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #444857;
      margin: 0 5px;
    }
  }

  .wrapper {
    width: 100vw;
    margin: 0 auto;
    height: 400px;
    background-color: #161616;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 767px) {
    .wrapper {
      height: 700px;
    }
  }

  .content {
    max-width: 1024px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    .content {
      padding-top: 300px;
      flex-direction: column;
    }
  }

  .card {
    width: 100%;
    max-width: 300px;
    min-width: 200px;
    height: 250px;
    background-color: #292929;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    border: 2px solid rgba(7, 7, 7, 0.12);
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .icon {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(
      90deg,
      #4fa75a 50%,
      #74e953 50%,
      rgba(0, 0, 0, 0.28) 60%
    );
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
  }

  .material-icons.md-18 {
    font-size: 18px;
  }
  .material-icons.md-24 {
    font-size: 24px;
  }
  .material-icons.md-36 {
    font-size: 36px;
  }
  .material-icons.md-48 {
    font-size: 48px;
  }

  .card .title {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .card .text {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }

  .card:hover {
    height: 270px;
  }

  .card:hover .info {
    height: 90%;
  }

  .card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
  }

  .card:hover .icon {
    background-position: -120px;
    transition: all 0.3s ease;
  }

  .card:hover .icon i {
    background: linear-gradient(90deg, #ff7e7e, #ff4848);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: all 0.3s ease;
  }
`;
