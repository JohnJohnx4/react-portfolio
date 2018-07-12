import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	heading: {
		margin: "20px",
		fontSize: theme.typography.pxToRem(18),
		fontWeight: "bold"
	},
	secondaryHeading: {
		margin: "0 20px",
		fontSize: theme.typography.pxToRem(14),
		color: theme.palette.text.secondary
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		display: "flex",
		justifyContent: "center"
	},
	bigAvatar: {
		margin: 10,
		width: 250,
		height: 250
	}
});

function Home(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<div className={classes.row}>
							<Avatar
								alt="John C"
								src="https://i.imgur.com/3GTFHtB.jpg"
								className={classes.bigAvatar}
							/>
						</div>
						<Typography className={classes.heading}>
							Hi! My name is John, and I am a web developer. I have over 8 years
							of experience in the 3 major theme parks in Orlando, and I am an
							expert at customer service. I also enjoy game development as a
							hobby.
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Please explore my site to learn more or click on the icon on the
							bottom-right to download my resume, access my GitHub Repos, and
							visit my LinkedIn.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
