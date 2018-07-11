import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Experience from "./Experience";

const styles = {
  root: {
    maxWidth: "900px",
    margin: "auto",
    flexGrow: 1
  }
};

class ExperiencePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Experience {...this.props} />
        </Paper>
      </div>
    );
  }
}

ExperiencePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExperiencePage);
