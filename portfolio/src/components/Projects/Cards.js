import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardContent,
	CardHeader,
	CardMedia,
  Typography,
  IconButton,
  Button,
  CardActions,
  Collapse
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoterImg from '../../assets/noter.png';
import HairsprayImg from '../../assets/hairspray.png';
import ShatteredImg from '../../assets/shattered.png';
import TetrisImg from '../../assets/tetris.png';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper
  },
  card: {
    maxWidth: 400,
    margin: '2%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

const projects = [
  {
		title: 'Noter',
		subtitle: 'MERN Stack',
    description:
      'A note taking app able to create, read, update, and delete simple notes. User authentication with JWTs.',
    link: 'https://www.hairspray.app',
    image: NoterImg
  },
  {
		title: 'Hairspray',
		subtitle: 'MERN Stack',
    description:
      'An app for hair salon guests to book appointments and leave user feedback. Utilizes Twilio and Stripe APIs',
    link: 'https://johnc-noter.herokuapp.com',
    image: HairsprayImg
  },
  {
		title: 'Shattered',
		subtitle: 'Unity WebGL',
    description:
      'A Twisted Metal game clone, built with Unity and deployed to Heroku.',
    link: 'https://shattered-iron.herokuapp.com',
    image: ShatteredImg
  },
  {
		title: 'Tetris',
		subtitle: 'JS, HTML Canvas',
    description: 'A tetris clone made with vanilla Javascript and HTML Canvas.',
    link:
      'https://johnjohnx4.github.io/Personal-Projects/Projects/Games/Tetris/',
    image: TetrisImg
  }
];

function Cards(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const { classes } = props;
  return (
    <div className={classes.root}>
      {projects.map((project, i) => {
        return (
          <Card className={classes.card} key={i}>
            <CardHeader title={project.title} subheader={project.subtitle} />
            <CardMedia
              className={classes.media}
              image={project.image}
              title={project.title}
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={project.link}> Visit Site </Button>
              {/* <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='Show more'
              >
                <ExpandMoreIcon />
              </IconButton> */}
            </CardActions>
            {/* <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
              </CardContent>
            </Collapse> */}
          </Card>
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
