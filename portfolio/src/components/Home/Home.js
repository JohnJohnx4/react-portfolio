import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

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
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root + " home"}>
      <Grid container spacing={24} className="home__grid__container">
        <Grid item xs={12} className="home__grid">
          <Paper className={classes.paper+ " home__paper"}>
            <div className={classes.row}>
              <Avatar
                alt="John C"
                src="https://i.imgur.com/3GTFHtB.jpg"
                className={classes.bigAvatar + " home__avatar"}
              />
            </div>
            <Typography className={classes.heading + " home__header"}>
              Hi! My name is John, and I am a web developer. I have worked in Theme Parks and customer service for the past eight years, and I have really enjoyed my experiences. I knew I definitely wanted to work with computers more and have been in constant pursuit of getting the education neccesary to start my career. I have moved around different jobs, sometimes holding two or three, trying to make a living while learning as much as I can to be a good programmer. My journey has finally led me to this point,and I now have the skills to be part of the tech industry and start my next adventure!
            </Typography>
            <Typography className={classes.secondaryHeading + " home__subheader"}>
              Please explore my site to learn more about me and what I have done or click on the icon on the
              bottom-right to download my resume, access my GitHub Repos, and
              visit my LinkedIn.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
