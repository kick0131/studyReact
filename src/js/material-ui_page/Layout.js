import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// ユーザコンポーネント
import SelectRadio from './parts/SelectRadio'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  console.log("=== Layout ===");

  const classes = useStyles();

  return (
    <>
      <ScopedCssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>header</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>sidebar</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>contents</Paper>
            <SelectRadio vertical={false}/>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>footer</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
