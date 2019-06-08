import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import SimpleList from './List';
import Cards from './Cards';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    margin: '20px',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold'
  },
  secondaryHeading: {
    margin: '0 20px',
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
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
      <Cards />
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
