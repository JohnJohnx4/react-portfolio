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
  CalendarTodayIcon,
	GamepadIcon,
	GamepadVariantIcon,
  SkullIcon,
  CashUsdIcon
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
				<ListItem button component="a" href="https://www.hairspray.app">
					<ListItemIcon className="project__icon">
						<SprayIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Hairspray" />
					<Typography className="project__text">
						An app for hair salon guests to book appointments. Built with MERN
						and utilizes Twilio and Stripe APIs
					</Typography>
				</ListItem>

				<a href="https://johnc-noter.herokuapp.com">
					<ListItem button>
						<ListItemIcon className="project__icon">
							<NoteMultipleOutlineIcon />
						</ListItemIcon>
						<ListItemText className="project__title" primary="Noter" />
						<Typography className="project__text">
							A note taking app able to create, read, update, and delete simple
							notes. Made with MERN stack
						</Typography>
					</ListItem>
				</a>

				<ListItem
					button
					component="a"
					href="https://shattered-iron.herokuapp.com"
				>
					<ListItemIcon className="project__icon">
						<GamepadVariantIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Shattered Iron" />
					<Typography className="project__text">
						A 'Twisted Metal' game clone, built with Unity and deployed to
						Heroku.
					</Typography>
				</ListItem>

				<ListItem
					button
					component="a"
					href="https://github.com/JohnJohnx4/Unity-Hackathon-Project"
				>
					<ListItemIcon className="project__icon">
						<SkullIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Zombie Killers" />
					<Typography className="project__text">
						A zombie first-person shooter made in Unity.
					</Typography>
				</ListItem>

				<ListItem
					button
					component="a"
					href="https://johnjohnx4.github.io/Personal-Projects/Projects/Games/Tetris/"
				>
					<ListItemIcon className="project__icon">
						<GamepadIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Tetris" />
					<Typography className="project__text">
						A tetris clone made with HTML Canvas and Javascript
					</Typography>
				</ListItem>

				<ListItem button component="a" href="https://www.givememymoney.app/">
					<ListItemIcon className="project__icon">
            <CashUsdIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Give Me My Money" />
					<Typography className="project__text">
						Project lead for a 4 man team to develop a MERN stack app that sends payment reminders.
					</Typography>
				</ListItem>

				<ListItem button component="a" href="https://www.lambdahairschool.com/">
					<ListItemIcon className="project__icon">
            <CalendarTodayIcon />
					</ListItemIcon>
					<ListItemText className="project__title" primary="Lambda Hair School" />
					<Typography className="project__text">
						Managed and led a team to develop a hair appointment web app. Uses React and Django.
					</Typography>
				</ListItem>
			</List>
		</div>
	);
}

SimpleList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
