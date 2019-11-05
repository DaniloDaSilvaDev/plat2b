/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
// import { FaBookmark, FaCheckSquare } from "react-icons/fa";
import { CardBody, useStyles } from "./styles";

export default function Pdf() {
  // const author = [
  //   {
  //     name: "Hanna",
  //     lastname: "Montana",
  //     photo: require("../../assets/eu.jpg")
  //   }
  // ]
  const posts = [
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia na didática - PDF",
      desc:
        " kkkkk kkkkkkk kkkkk kkkkkkkkk kkkkkkk kkkkk kkkkk kkkkkk kkkkkkkkkkkkkkkkk kkkk kkkkkk kkk However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      category: "PDF",
      categoryUrl: "#",
      date: "29 Deembro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    },
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Conduct at an replied removal an amongst",
      desc:
        "However venture pursuit he a cordial. Forming musical am hearing studied be luckily. But in for determine what would see However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see",
      category: "Vídeo",
      categoryUrl: "#",
      date: "14 Fevereiro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    },
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia na didática - PDF",
      desc:
        "However venture pursuit he a cordial. Forming musical am hearing studied be luckily. But in for determine what would see",
      category: "Podcasts",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    },
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia na didática - PDF",
      desc:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see",
      category: "Podcasts",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    },
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia na didática - PDF",
      desc:
        "However venture pursuit he a cordial. Forming musical am hearing studied be luckily. But in for determine what would see",
      category: "Podcasts",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    },
    {
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia na didática - PDF",
      desc:
        "However venture pursuit he a ver venture pursuit he a cordial. Form cordial. Forming musical am hearing studied be luckily. But in for determine what would see",
      category: "Podcasts",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Hanna",
        lastname: "Montana",
        photo: require("../../assets/eu.jpg"),
        url: "#"
      }
    }
  ];
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      {posts.map(post => (
        <Grid item lg={4} md={6} sm={12}>
          <Paper className={classes.paper}>
            <div
              className={classes.img}
              style={{ backgroundImage: `url(${post.backgroundImage})` }}
            >
              <div className={classes.author}>
                <div
                  className={classes.photo}
                  style={{ backgroundImage: `url(${post.author.photo})` }}
                ></div>
              </div>
              <span
                style={{ backgroundColor: "#000fff" }}
                className={classes.category}
              >
                {post.category}
              </span>
            </div>
            <CardBody>
              {/* <img src={photoPdf} alt="" /> */}
              <Typography component="h1" variant="h5" className={classes.title}>
                {post.title}
              </Typography>
              <Typography component="p" className={classes.desc}>
                {post.desc}
              </Typography>

              {/* <FaBookmark
            className="icon-fav"
            size={18}
            cursor="pointer"
            color="#333"
          />
          <FaCheckSquare
            className="icon-check"
            size={18}
            cursor="pointer"
            color="#333"
          /> */}
            </CardBody>
            <Typography component="span" className={classes.date}>
              {post.date}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>

    // <Grid item xs={6}>
    //   <Content>
    //     <FaFilePdf className="icon-pdf" size={30} color="#333" />
    //     <div className="content-text">
    //       <h1>Influência da pedagogia na didática - PDF</h1>
    //       <p>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eius,
    //         ut aperiam aliquam beatae recusandae fugiat cupiditate porro at
    //         autem nisi illum officiis nobis esse incidunt ex expedita veritatis
    //         quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
    //         eius, ut aperiam aliquam beatae recusandae fugiat cupiditate porro
    //         at autem nisi illum officiis nobis esse incidunt ex expedita
    //         veritatis quia.
    //       </p>
    //     </div>

    //     <FaBookmark
    //       className="icon-fav"
    //       size={18}
    //       cursor="pointer"
    //       color="#333"
    //     />
    //     <FaCheckSquare
    //       className="icon-check"
    //       size={18}
    //       cursor="pointer"
    //       color="#333"
    //     />
    //   </Content>
    //</Grid>
  );
}
