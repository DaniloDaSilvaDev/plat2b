import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    fle: 1,
    flexGrow: 1,
    fontSize: 15,
    padding: 20
  },
  control: {
    padding: theme.spacing(2)
  },
  paper: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: " column",
    flexWrap: "nowrap",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: ".625rem",
    boxShadow:
      "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);"
  },
  img: {
    backgroundSize: "cover",
    backgroundPosition: "50%",
    position: "relative",
    minHeight: "10.3125rem",
    borderTopLeftRadius: ".625rem",
    borderTopRightRadius: ".625rem",
    backgroundRepeat: "no-repeat"

    // display: "flex",
    // alignItems: "stretch",
    // backgroundSize: "cover",
    // backgroundPosition: "50%",
    // position: "relative",
    // minHeight: "10.3125rem",
    // borderTopLeftRadius: "20px",
    // borderTopRightRadius: "20px",
    // backgroundRepeat: "no-repeat"
  },
  category: {
    color: "#fff",
    // fontSize: 14,
    top: ".9375rem",
    left: 22,
    position: "absolute",
    textTransform: "uppercase",
    borderRadius: "10rem",
    padding: ".375rem .5rem"
  },

  title: {
    color: "#3d5170",
    fontSize: "30px",
    lineHeight: "1em",
    fontWeight: "bold",
    marginBottom: ".75rem"
  },
  desc: {
    color: "#5a6169;",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    overflow: "hidden",
    height: "84px"
  },
  date: {
    color: "#5a6169;",
    fontSize: "16px",
    marginTop: "auto",
    padding: "2.1875rem 1.5625rem 20px 1.5625rem"
  },
  author: {
    display: "flex",
    transform: "translateY(50%)",
    marginLeft: "1.5625rem",
    position: "absolute",
    bottom: 0

    // display: "block",
    // width: "60px",
    // borderRadius: "50%",
    // position: "absolute",
    // top: "50px"
  },
  photo: {
    width: "50px",
    height: "50px",
    boxShadow: "0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5)",
    display: "block",
    borderRadius: "50%",
    textIndent: "-9999px",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    cursor: "pointer"
  },
  popover: {
    pointerEvents: "none"
  },
  nameTeach: {
    padding: 10,
    fontWeight: 800,
    backgroundColor: "#222D32",
    color: "#fff"
  },
  icons: {
    position: "absolute",
    top: 10,
    right: 10
  }
}));

export const CardBody = styled.div`
  padding: 2.1875rem 1.5625rem;
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
