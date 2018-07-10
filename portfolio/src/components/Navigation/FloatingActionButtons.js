import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DescriptionIcon from "@material-ui/icons/Description";

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
					className={classes.button}
				>
					<DescriptionIcon />
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
					<MenuItem onClick={this.handleClose}>Resume</MenuItem>
					<MenuItem onClick={this.handleClose}>Github</MenuItem>
					<MenuItem onClick={this.handleClose}>LinkedIn</MenuItem>
				</Menu>
			</div>
		);
	}
}

SimpleMenu.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMenu);
