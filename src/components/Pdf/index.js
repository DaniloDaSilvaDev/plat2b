/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
// import { FaBookmark, FaCheckSquare } from "react-icons/fa";
import { CardBody, useStyles } from "./styles";
import Popover from "@material-ui/core/Popover";

export default function Pdf() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const posts = [
    {
      id: 1,
      backgroundImage: require("../../assets/teste.jpeg"),
      title: "Influência da pedagogia",
      desc:
        "Os anos podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São coragem nos momentos difíceis. São luz nos momentos de desânimo. podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "PDF",
      categoryColor: "rgb(210, 136, 0)",
      categoryUrl: "#",
      date: "29 Deembro 2019",
      author: {
        name: "Monica",
        lastname: "Santiago",
        photo: require("../../assets/prof1.jpg"),
        url: "#"
      }
    },
    {
      id: 2,
      backgroundImage: require("../../assets/teste1.jpg"),
      title: "Pedagogia e sociedade",
      desc:
        "Ser estrela nesse mundo de cometas é um desafio, mas acima de tudo é uma recompensa. É nascer e viver, e não apenas existir! Então brilhe minha estrela, Que o céu hoje é todo seu podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "Vídeo",
      categoryColor: "rgb(59, 162, 57)",
      categoryUrl: "#",
      date: "14 Fevereiro 2019",
      author: {
        name: "Carla",
        lastname: "Machado",
        photo: require("../../assets/prof2.jpg"),
        url: "#"
      }
    },
    {
      id: 3,
      backgroundImage: require("../../assets/teste2.jpg"),
      title: "Psicologia pedagógica",
      desc:
        "However venture pursuit he a cordial. Forming musical am hearing studied be luckily. But in for determine what would see podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "Podcasts",
      categoryColor: "#000",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Maria",
        lastname: "Silva",
        photo: require("../../assets/prof3.jpg"),
        url: "#"
      }
    },
    {
      id: 4,
      backgroundImage: require("../../assets/teste3.jpg"),
      title: "Como melhorar a didática",
      desc:
        "Que mais um ano lhe traga mais realizações, mais sabedoria, e mais esperança. Que esta data se repita por muitos anos e que estes sejam preenchidos de felicidade, amor e paz. Parabéns e um dia muito feliz podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "Vídeo",
      categoryColor: "rgb(59, 162, 57)",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Raquel",
        lastname: "Ferreira",
        photo: require("../../assets/prof4.jpg"),
        url: "#"
      }
    },
    {
      id: 5,
      backgroundImage: require("../../assets/teste4.jpg"),
      title: "Influência da pedagogia",
      desc:
        "Mas que pelo caminho encontre a felicidade nos pequenos pormenores da vida. Pois no final, ser feliz é isso mesmo; é apreciar todas as belezas que existem à sua volta sem nunca se distrair da sua meta podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "PDF",
      categoryColor: "rgb(210, 136, 0)",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Danusa",
        lastname: "Alves",
        photo: require("../../assets/prof3.jpg"),
        url: "#"
      }
    },
    {
      id: 6,
      backgroundImage: require("../../assets/teste5.jpg"),
      title: "Currículo pedagógica",
      desc:
        "However venture pursuit he a ver venture pursuit he a cordial. Form cordial. Forming musical am hearing studied be luckily. But in for determine what would see podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São",
      category: "Podcasts",
      categoryColor: "#000",
      categoryUrl: "#",
      date: "08 Janeiro 2019",
      author: {
        name: "Danielle",
        lastname: "de Jesus",
        photo: require("../../assets/prof1.jpg"),
        url: "#"
      }
    }
  ];
  const classes = useStyles();

  return (
    <>
      {posts.map(post => (
        <Grid item lg={4} md={6} sm={12}>
          <Paper className={classes.paper} key={post.id}>
            <div
              className={classes.img}
              style={{ backgroundImage: `url(${post.backgroundImage})` }}
            >
              <div
                className={classes.author}
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <div
                  className={classes.photo}
                  style={{ backgroundImage: `url(${post.author.photo})` }}
                ></div>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  // classes={{
                  //   paper: classes.paper
                  // }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography className={classes.nameTeach}>
                    Prof: {post.author.name}
                  </Typography>
                </Popover>
              </div>
              <span
                style={{ backgroundColor: `${post.categoryColor}` }}
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
    </>

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
