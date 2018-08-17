import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {
  EmailIcon,
	PhoneIcon,
	// BookmarkOutlineIcon,
	GithubBoxIcon,
	LinkedinBoxIcon,
	FileDocumentIcon
} from "mdi-react";

const styles = theme => ({
	root: {
		width: "100%",

		backgroundColor: theme.palette.background.paper
	}
});

function ContactList(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button component="a" href="mailto:contactme@johnpcorreia.com">
					<ListItemIcon className="contact__icon">
						<EmailIcon />
					</ListItemIcon>
					<ListItemText className="contact__title" primary="Email" />
					<Typography className="contact__text">
						contactme@johnpcorreia.com
					</Typography>
				</ListItem>

				<ListItem button component="a" href="tel:+1-724-824-3228">
					<ListItemIcon className="contact__icon">
						<PhoneIcon />
					</ListItemIcon>
					<ListItemText className="contact__title" primary="Phone" />
					<Typography className="contact__text">
            (724) 824-3228
					</Typography>
				</ListItem>

				<ListItem
					button
					component="a"
					href="https://github.com/JohnJohnx4"
				>
					<ListItemIcon className="contact__icon">
						<GithubBoxIcon/>
					</ListItemIcon>
					<ListItemText className="contact__title" primary="Github" />
					<Typography className="contact__text">
          github.com/JohnJohnx4
					</Typography>
				</ListItem>

				<ListItem
					button
					component="a"
					href="https://www.linkedin.com/in/john-correia/"
				>
					<ListItemIcon className="contact__icon">
						<LinkedinBoxIcon />
					</ListItemIcon>
					<ListItemText className="contact__title" primary="LinkedIn" />
					<Typography className="contact__text">
						LinkedIn
					</Typography>
				</ListItem>

				<ListItem
					button
					component="a"
					href="https://drive.google.com/open?id=1IUfHy4HN5PmtBlC449WH-xjO-RXycxQ0"
				>
					<ListItemIcon className="contact__icon">
						<FileDocumentIcon />
					</ListItemIcon>
					<ListItemText className="contact__title" primary="Resume" />
					<Typography className="contact__text">
						Resume
					</Typography>
				</ListItem>
			</List>
		</div>
	);
}

ContactList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactList);
