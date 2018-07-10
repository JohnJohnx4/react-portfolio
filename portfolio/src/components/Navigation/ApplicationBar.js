import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ApplicationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            John P. Correia
          </Typography>
          <Link to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/projects">
            <Button color="inherit">Projects</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/experience">
            <Button color="inherit">Experience</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplicationBar);
