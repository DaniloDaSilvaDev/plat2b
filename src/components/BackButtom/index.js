import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BackButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Button variant="contained" href={`${props.linkVoltar}`}>Voltar</Button>      
    </div>
  );
}
