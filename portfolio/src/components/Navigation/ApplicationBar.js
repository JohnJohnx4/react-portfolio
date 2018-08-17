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
      <AppBar position="static" className="appbar">
        <Toolbar className="appbar__container">
          <Typography variant="title" color="inherit" className={classes.flex + " appbar__title"}>
          <Link to="/">
              John P. Correia
          </Link>
          </Typography>
          <Link to="/">
            <Button className="appbar__button" color="inherit">Home</Button>
          </Link>
          <Link to="/projects">
            <Button className="appbar__button" color="inherit">Projects</Button>
          </Link>
          <Link to="/about">
            <Button className="appbar__button" color="inherit">About</Button>
          </Link>
          <Link to="/experience">
            <Button className="appbar__button" color="inherit">Experience</Button>
          </Link>
          <Link to="/contact">
            <Button className="appbar__button" color="inherit">Contact</Button>
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
