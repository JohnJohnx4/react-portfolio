import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
	MenuIcon
  } from "mdi-react";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

class SimpleMenu extends React.Component {
	state = {
		anchorEl: null
	};

	FloatingActionButtons(props, anchorEl) {
		const { classes } = props;
		return (
			<div>
				<Button
					variant="fab"
					color="primary"
          aria-label="add"
          aria-owns={anchorEl ? "simple-menu" : null}
					aria-haspopup="true"
					onClick={this.handleClick}
					className={classes.button + " nav__button"}
				>
					<MenuIcon className="nav__menuicon"/>
				</Button>
			</div>
		);
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		return (
			<div className="action__button">
      {this.FloatingActionButtons(this.props, anchorEl)}
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<a href="https://drive.google.com/open?id=1IUfHy4HN5PmtBlC449WH-xjO-RXycxQ0"><MenuItem onClick={this.handleClose}>Resume</MenuItem></a>
					<a href="https://github.com/JohnJohnx4"><MenuItem>Github</MenuItem></a>
					<a href="https://www.linkedin.com/in/john-correia/"><MenuItem>LinkedIn</MenuItem></a>
				</Menu>
			</div>
		);
	}
}

SimpleMenu.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMenu);
