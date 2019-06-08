import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Projects from '../Projects/Projects';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    margin: '20px',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold',
    textAlign: 'center'
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
  paper2: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '25px'
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

function Home(props) {
  const { classes } = props;

  const aboutText = () =>
    'Hello! My name is John and I am a professional software engineer. I have experience with React, Angular, Node, Firebase, MongoDB, and more!';

  const aboutSubText = () =>
    'Please explore my site to learn more about me and my projects. If you would like to contact me or see my resume, all of my info is on the Contact page.';

  return (
    <div className={classes.root + ' home'}>
      <Grid container spacing={24} className='home__grid__container'>
        {/* <Grid item xs={12} className="home__grid">
					<Grid item xs={12} className="home__grid">
						<Paper className={classes.paper + " home__paper"}> */}
        <div className={classes.row}>
          <Typography
            color='primary'
            className={classes.heading + ' home__header'}
          >
            {aboutText()}
          </Typography>
        </div>
        <Projects />
        <Typography
          color='primary'
          className={classes.secondaryHeading + ' home__subheader'}
        >
          {aboutSubText()}
        </Typography>
        {/* </Paper>
					</Grid>
				</Grid> */}
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
