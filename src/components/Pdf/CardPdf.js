// /* eslint-disable global-require */
// import React, { useState } from 'react';
// import { Grid, Typography, Paper } from '@material-ui/core';
// import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
// import Popover from '@material-ui/core/Popover';
// import { CardBody, useStyles } from './styles';

// export default function CardPdf() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handlePopoverOpen = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   const posts = [
//     {
//       id: 1,
//       backgroundImage: require('../../assets/teste.jpeg'),
//       title: 'Influência da pedagogia',
//       desc:
//         'Os anos podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São coragem nos momentos difíceis. São luz nos momentos de desânimo. podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'PDF',
//       categoryColor: 'rgb(210, 136, 0)',
//       categoryUrl: '#',
//       date: '29 Deembro 2019',
//       author: {
//         name: 'Monica',
//         lastname: 'Santiago',
//         photo: require('../../assets/prof1.jpg'),
//         url: '#',
//       },
//     },
//     {
//       id: 2,
//       backgroundImage: require('../../assets/teste1.jpg'),
//       title: 'Pedagogia e sociedade',
//       desc:
//         'Ser estrela nesse mundo de cometas é um desafio, mas acima de tudo é uma recompensa. É nascer e viver, e não apenas existir! Então brilhe minha estrela, Que o céu hoje é todo seu podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'Vídeo',
//       categoryColor: 'rgb(59, 162, 57)',
//       categoryUrl: '#',
//       date: '14 Fevereiro 2019',
//       author: {
//         name: 'Carla',
//         lastname: 'Machado',
//         photo: require('../../assets/prof2.jpg'),
//         url: '#',
//       },
//     },
//     {
//       id: 3,
//       backgroundImage: require('../../assets/teste2.jpg'),
//       title: 'Psicologia pedagógica',
//       desc:
//         'However venture pursuit he a cordial. Forming musical am hearing studied be luckily. But in for determine what would see podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'Podcasts',
//       categoryColor: '#000',
//       categoryUrl: '#',
//       date: '08 Janeiro 2019',
//       author: {
//         name: 'Maria',
//         lastname: 'Silva',
//         photo: require('../../assets/prof3.jpg'),
//         url: '#',
//       },
//     },
//     {
//       id: 4,
//       backgroundImage: require('../../assets/teste3.jpg'),
//       title: 'Como melhorar a didática',
//       desc:
//         'Que mais um ano lhe traga mais realizações, mais sabedoria, e mais esperança. Que esta data se repita por muitos anos e que estes sejam preenchidos de felicidade, amor e paz. Parabéns e um dia muito feliz podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'Vídeo',
//       categoryColor: 'rgb(59, 162, 57)',
//       categoryUrl: '#',
//       date: '08 Janeiro 2019',
//       author: {
//         name: 'Raquel',
//         lastname: 'Ferreira',
//         photo: require('../../assets/prof4.jpg'),
//         url: '#',
//       },
//     },
//     {
//       id: 5,
//       backgroundImage: require('../../assets/teste4.jpg'),
//       title: 'Influência da pedagogia',
//       desc:
//         'Mas que pelo caminho encontre a felicidade nos pequenos pormenores da vida. Pois no final, ser feliz é isso mesmo; é apreciar todas as belezas que existem à sua volta sem nunca se distrair da sua meta podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'PDF',
//       categoryColor: 'rgb(210, 136, 0)',
//       categoryUrl: '#',
//       date: '08 Janeiro 2019',
//       author: {
//         name: 'Danusa',
//         lastname: 'Alves',
//         photo: require('../../assets/prof3.jpg'),
//         url: '#',
//       },
//     },
//     {
//       id: 6,
//       backgroundImage: require('../../assets/teste5.jpg'),
//       title: 'Currículo pedagógica',
//       desc:
//         'However venture pursuit he a ver venture pursuit he a cordial. Form cordial. Forming musical am hearing studied be luckily. But in for determine what would see podem passar, mas as marcas ficam no coração, assim são os amigos na nossa vida, pois podemos contar com eles. São',
//       category: 'Podcasts',
//       categoryColor: '#000',
//       categoryUrl: '#',
//       date: '08 Janeiro 2019',
//       author: {
//         name: 'Danielle',
//         lastname: 'de Jesus',
//         photo: require('../../assets/prof1.jpg'),
//         url: '#',
//       },
//     },
//   ];
//   const classes = useStyles();

//   // const [ok, setOk] = useState(false);
//   // function clicouIcone() {
//   //   setOk(!ok);
//   // }

//   return (
//     <Grid container className={classes.root} spacing={4}>
//       {posts.map(post => (
//         <Grid item lg={4} md={6} sm={12}>
//           <Paper className={classes.paper} key={post.id}>
//             <div
//               className={classes.img}
//               style={{ backgroundImage: `url(${post.backgroundImage})` }}
//             >
//               <div
//                 className={classes.author}
//                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                 aria-haspopup="true"
//                 onMouseEnter={handlePopoverOpen}
//                 onMouseLeave={handlePopoverClose}
//               >
//                 <div
//                   className={classes.photo}
//                   style={{ backgroundImage: `url(${post.author.photo})` }}
//                 >
//                   <Popover
//                     id="mouse-over-popover"
//                     className={classes.popover}
//                     open={open}
//                     anchorEl={anchorEl}
//                     anchorOrigin={{
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     }}
//                     transformOrigin={{
//                       vertical: 'top',
//                       horizontal: 'left',
//                     }}
//                     onClose={handlePopoverClose}
//                     disableRestoreFocus
//                   >
//                     <Typography className={classes.nameTeach}>
//                       Prof: {post.author.name}
//                     </Typography>
//                   </Popover>
//                 </div>
//               </div>
//               <span
//                 style={{ backgroundColor: `${post.categoryColor}` }}
//                 className={classes.category}
//               >
//                 {post.category}
//               </span>
//               <div className={classes.icons}>
//                 {ok ? (
//                   <FaBookmark size={24} cursor="pointer" color="#fff" />
//                 ) : (
//                   <FaRegBookmark size={24} cursor="pointer" color="#fff" />
//                 )}
//               </div>
//             </div>
//             <CardBody>
//               <Typography component="h1" variant="h5" className={classes.title}>
//                 {post.title}
//               </Typography>
//               <Typography component="p" className={classes.desc}>
//                 {post.desc}
//               </Typography>
//             </CardBody>
//             <Typography component="span" className={classes.date}>
//               {post.date}
//             </Typography>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
