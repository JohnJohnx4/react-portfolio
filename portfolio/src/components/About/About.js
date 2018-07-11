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

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paperimg}>
            <img 
            className="about__image"
            src="https://i.imgur.com/i2wlcWk.jpg"
            alt="John" />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <div className={classes.row} />
            <Typography className={classes.heading}>
              I've logged 8 years in theme parks and guest service, and now I'm ready to start new adventures in software development.
            </Typography>
            <Typography className={classes.secondaryHeading}>
              I have done so many different things at Walt Disney World, Universal Studios, and SeaWorld, from working 36 hour shifts to working way past midnight on New Years Eve, from performing first-aid to helping lost children; I've loved all of it, made many friends, some that I even consider family, and found love in a place I never expected. I've had a thrilling life so far, and I'm ready to start my next adventure pursuing a career in a field that will I love even more.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
