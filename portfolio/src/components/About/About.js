import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
		fontWeight: "500",
		color: theme.palette.text.secondary
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "left",
		color: theme.palette.text.secondary,
		height: "280px"
	},
	paperimg: {
		padding: theme.spacing.unit * 2,
		textAlign: "left",
		color: theme.palette.text.secondary,
		height: "280px",
		display: "flex",
		justifyContent: "space-around"
	}
});

function About(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container className="about__grid" spacing={24}>
				<Grid item xs={4} className="about__img__grid">
					<Paper className={classes.paperimg + " about__img__paper"}>
						<img
							className="about__image"
							src="https://i.imgur.com/3GTFHtB.jpg"
							alt="John"
						/>
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<div className={classes.row} />
						<Typography className={classes.heading}>
							I've been coding as a hobby for years, but now I am developing
							apps and websites for a living.
						</Typography>
						<Typography className={classes.secondaryHeading + " about__text"}>
							I love building games and tinkering with them as a hobby, and have
							always found coding fun. I have recently shifted my focus towards
							full stack web developement, and have fallen in love with this
							field as well. I have recently graduated from Lambda school, and I
							am excited to find a career in software development where I can
							both utilize the skills I've acquired coding games and web apps,
							and refine those skills in a professional environment. <br />
							While I love building games, now I can build just about anything.
						</Typography>
					</Paper>
				</Grid>
			</Grid>

			<Grid container className="about__grid2" spacing={24}>
				<Grid item xs={12} className="about__img__grid">
					<Paper className={classes.paperimg + " about__img__paper"}>
						<img
							className="about__image"
							src="https://i.imgur.com/i2wlcWk.jpg"
							alt="John"
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} className="about__text__grid">
					<Paper className={classes.paper + " about__text"}>
						<div className={classes.row} />
						<Typography className={classes.heading}>
							I've been coding as a hobby for years, but now I am developing for
							a living.
						</Typography>

						<Typography className={classes.secondaryHeading + " about__text"}>
							I love building games and tinkering with them as a hobby, and have
							always found coding fun. I have recently shifted my focus towards
							full stack web developement, and have fallen in love with this
							field as well. I have recently graduated from Lambda school, and I
							am excited to find a career in software development where I can
							both utilize the skills I've acquired coding games and web apps,
							and refine those skills in a professional environment. <br />
							While I love building games, now I can build just about anything.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

About.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
