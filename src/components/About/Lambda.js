import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    margin: "20px",
    fontSize: theme.typography.pxToRem(18),
    fontWeight: "bold"
  },
  secondaryHeading: {
    margin: "0 20px",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "500",
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "280px"
  },
  paperimg: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "280px",
    display: "flex",
    justifyContent: "space-around"
  }
});

function Lambda(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className="lambda__grid2" spacing={24}>
        <Grid item xs={12} className="lambda__text__grid">
          <Paper className={classes.paper + ' lambda__text'}>
            <div className={classes.row} />
            <Typography className={classes.heading}>
              Lambda School has changed me.
            </Typography>
            <Typography className={classes.secondaryHeading + ' lambda__text'}>
              Stuff about Lambda
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Lambda.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Lambda);
