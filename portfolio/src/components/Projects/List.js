import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {
  NoteMultipleOutlineIcon,
  SprayIcon,
  BookmarkOutlineIcon,
  GamepadIcon,
  GamepadVariantIcon,
  GunIcon
} from "mdi-react";

const styles = theme => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <a href="https://johnc-noter.herokuapp.com">
          <ListItem button>
            <ListItemIcon>
              <NoteMultipleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Noter" />
            <Typography>A note taking app able to CRUD simple notes. Made with MERN, deployed to Heroku</Typography>
          </ListItem>
        </a>

        <ListItem
          button
          component="a"
          href="https://obscure-island-58835.herokuapp.com"
        >
          <ListItemIcon>
            <SprayIcon />
          </ListItemIcon>
          <ListItemText primary="Hairspray" />
          <Typography>An app for hair salon guests to book appointments. Built with Mern and utilizes Twilio and Stripe APIs</Typography>
        </ListItem>

        <ListItem button component="a" href="https://johnc-djorg.herokuapp.com">
          <ListItemIcon>
            <BookmarkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Djorg" />
          <Typography>A bookmarking app built with Python and Django</Typography>
        </ListItem>

        <ListItem
          button
          component="a"
          href="https://shattered-iron.herokuapp.com"
        >
          <ListItemIcon>
            <GamepadVariantIcon />
          </ListItemIcon>
          <ListItemText primary="Shattered Iron" />
          <Typography>A 'Twisted Metal' game clone, built with Unity and deployed to Heroku in only 30 hours</Typography>
        </ListItem>

        <ListItem
          button
          component="a"
          href="https://github.com/JohnJohnx4/Unity-Hackathon-Project"
        >
          <ListItemIcon>
            <GunIcon />
          </ListItemIcon>
          <ListItemText primary="Zombie Killers" />
          <Typography>A zombie FPS made in Unity in less than 30 hours. </Typography>
        </ListItem>

        <ListItem
          button
          component="a"
          href="https://johnjohnx4.github.io/Personal-Projects/Projects/Games/Tetris/"
        >
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="Tetris" />
          <Typography>A tetris clone made with HTML Canvas and Javascript</Typography>
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
