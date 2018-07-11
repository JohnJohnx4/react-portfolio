import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import {
  WebIcon,
  InstagramIcon,
  FacebookBoxIcon
} from "mdi-react";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    margin: 10,
    minWidth: 350,
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatarContainer: {
    padding: 5
  },
  avatar: {
    margin: "10px -5px 5px 5px",
    width: 40,
    height: 40
  }
});

class Friends extends React.Component {
  state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  title="DashinAsh"
                  aria-label="Ashley"
                  src="https://i.imgur.com/lDLbbYV.jpg"
                  className={classes.avatar}
                />
              }
              className={classes.avatarContainer}
              title="DashinAsh"
              subheader="Travel Blog"
            />
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/WRmtUDc.jpg?1"
              title="DashinAsh at Machu Picchu"
            />

            <CardContent>
              <Typography component="p">
                Ash travels all around the world, seeing amazing sights and
                telling informative stories. If one thing in the universe is
                certain, it is that this girl will never be boring.
              </Typography>
            </CardContent>

            <CardActions className={classes.actions} disableActionSpacing>
              <a href="https://dashinash.com">
                <IconButton aria-label="Website Link">
                  <WebIcon />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/_dashinash/">
                <IconButton aria-label="Instagram Link">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/DashinAsh/">
                <IconButton aria-label="Facebook Link">
                  <FacebookBoxIcon />
                </IconButton>
              </a>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Tayler"
                  src="https://i.imgur.com/ce9LbDo.jpg"
                  className={classes.avatar}
                />
              }
              className={classes.avatarContainer}
              title="SincerelyTaylerLee"
              subheader="Lifestyle Blog"
            />
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/hLuQ9WG.jpg"
              title="Grand Canyon"
            />

            <CardContent>
              <Typography component="p">
                She says "I'm just your average twenty-something millennial",
                but Tayler is nothing short of awesome. Check her out for
                insights on the millenial life.
              </Typography>
            </CardContent>

            <CardActions className={classes.actions} disableActionSpacing>
              <a href="https://sincerelytaylerlee.com">
                <IconButton aria-label="Website Link">
                  <WebIcon />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/sincerelytaylerlee/">
                <IconButton aria-label="Instagram Link">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/SincerelyTaylerLee/">
                <IconButton aria-label="Facebook Link">
                  <FacebookBoxIcon />
                </IconButton>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className={classes.container}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Sammy"
                  src="https://i.imgur.com/BscNyJC.jpg"
                  className={classes.avatar}
                />
              }
              className={classes.avatarContainer}
              title="SamyMega"
              subheader="Cosplay"
            />
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/Xdq8bZM.jpg"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography component="p">
                A hidden gem among cosplayers, the amount of work Samy puts into
                her cosplays really shows in every post. Her cosplays have all
                been amazing, they get better each time.
              </Typography>
            </CardContent>

            <CardActions className={classes.actions} disableActionSpacing>
              <a href="https://www.instagram.com/samy_mega/">
                <IconButton aria-label="Instagram Link">
                  <InstagramIcon />
                </IconButton>
              </a>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Lexi"
                  src="https://i.imgur.com/hEPi9My.jpg?1"
                  className={classes.avatar}
                />
              }
              className={classes.avatarContainer}
              title="AngryBunnyCosplay"
              subheader="Cosplay"
            />
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/u2BWFyf.jpg"
              title="Zoe"
            />

            <CardContent>
              <Typography component="p">
                My friend Lexi is another up and coming cosplayer. Her cosplays
                have been awesome so far, and she puts a lot of work into each
                character.
              </Typography>
            </CardContent>

            <CardActions className={classes.actions} disableActionSpacing>
              <a href="https://www.instagram.com/angrybunnycosplay/">
                <IconButton aria-label="Instagram Link">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/AngryBunnyCosplay/">
                <IconButton aria-label="Facebook Link">
                  <FacebookBoxIcon />
                </IconButton>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

Friends.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Friends);
