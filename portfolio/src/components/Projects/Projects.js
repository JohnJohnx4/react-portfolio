import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SimpleList from './List';

// https://giant.gfycat.com/SaneDisguisedChital.webm
// https://giant.gfycat.com/SaneDisguisedChital.mp4
// Unity zombie game

// https://giant.gfycat.com/ScrawnyGrandioseHeterodontosaurus.webm
// https://giant.gfycat.com/ScrawnyGrandioseHeterodontosaurus.mp4
// Unity Shattered Iron

// https://giant.gfycat.com/HeftyScalyInvisiblerail.webm
// https://giant.gfycat.com/HeftyScalyInvisiblerail.mp4
// Hairspray


// https://giant.gfycat.com/SphericalTanHerculesbeetle.webm
// https://giant.gfycat.com/SphericalTanHerculesbeetle.mp4
// GiveMeMyMoney


// https://giant.gfycat.com/JubilantImpressiveDanishswedishfarmdog.webm
// https://giant.gfycat.com/JubilantImpressiveDanishswedishfarmdog.mp4
// LambdaHairSchool


// https://giant.gfycat.com/FeistyDescriptiveEyas.webm
// https://giant.gfycat.com/FeistyDescriptiveEyas.mp4
// Tetris

// https://giant.gfycat.com/.webm
// https://giant.gfycat.com/.mp4
// example


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

function Projects(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SimpleList/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
