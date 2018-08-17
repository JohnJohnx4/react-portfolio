import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { AboutText, AboutSubText } from "./AboutText";
import Projects from './Projects';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	heading: {
		margin: "20px",
		fontSize: theme.typography.pxToRem(18),
		fontWeight: "bold",
		textAlign: "center"
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
	paper2: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary,
		marginTop: "25px"
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
		<div className={classes.root + " home"}>
			<Grid container spacing={24} className="home__grid__container">
				<Grid item xs={12} className="home__grid">
					<Grid item xs={12} className="home__grid">
						<Paper className={classes.paper + " home__paper"}>
							<div className={classes.row}>
								<Typography className={classes.heading + " home__header"}>
									<AboutText />
								</Typography>
							</div>
              <Projects />
						<Typography
							className={classes.secondaryHeading + " home__subheader"}
						>
							<AboutSubText />
						</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
