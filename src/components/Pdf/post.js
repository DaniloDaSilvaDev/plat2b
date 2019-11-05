import React, { useState } from "react";

import { Grid, Typography, Paper } from "@material-ui/core";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { CardBody, useStyles } from "./styles";
import Popover from "@material-ui/core/Popover";

export default function Post(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ok, clicouIcone] = useState(false);
  const classes = useStyles();

  const { data } = props;
  const open = Boolean(anchorEl);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item lg={4} md={6} sm={12}>
      <Paper className={classes.paper} key={data.id}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
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
              style={{ backgroundImage: `url(${data.author.photo})` }}
            >
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
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
                  Prof: {data.author.name}
                </Typography>
              </Popover>
            </div>
          </div>
          <span
            style={{ backgroundColor: `${data.categoryColor}` }}
            className={classes.category}
          >
            {data.category}
          </span>
          <div className={classes.icons} onClick={() => clicouIcone(!ok)}>
            {ok ? (
              <FaBookmark size={24} cursor="pointer" color="#fff" />
            ) : (
              <FaRegBookmark size={24} cursor="pointer" color="#fff" />
            )}
          </div>
        </div>
        <CardBody>
          <Typography component="h1" variant="h5" className={classes.title}>
            {data.title}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {data.desc}
          </Typography>
        </CardBody>
        <Typography component="span" className={classes.date}>
          {data.date}
        </Typography>
      </Paper>
    </Grid>
  );
}
