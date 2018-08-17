import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

// https://giant.gfycat.com/SaneDisguisedChital.webm
// https://giant.gfycat.com/SaneDisguisedChital.mp4
// Unity zombie game

// https://giant.gfycat.com/ScrawnyGrandioseHeterodontosaurus.webm
// https://giant.gfycat.com/ScrawnyGrandioseHeterodontosaurus.mp4
// Unity Shattered Iron

// https://giant.gfycat.com/HeftyScalyInvisiblerail.webm
// https://giant.gfycat.com/HeftyScalyInvisiblerail.mp4
// Hairspray

// https://giant.gfycat.com/SphericalTanHerculesbeetle.webm
// https://giant.gfycat.com/SphericalTanHerculesbeetle.mp4
// GiveMeMyMoney

// https://giant.gfycat.com/JubilantImpressiveDanishswedishfarmdog.webm
// https://giant.gfycat.com/JubilantImpressiveDanishswedishfarmdog.mp4
// LambdaHairSchool

// https://giant.gfycat.com/FeistyDescriptiveEyas.webm
// https://giant.gfycat.com/FeistyDescriptiveEyas.mp4
// Tetris

// https://giant.gfycat.com/.webm
// https://giant.gfycat.com/.mp4
// example

const projects = [
	{
		label: "Zombie Killers",
		description: "An FPS made in Unity for a 24 hour Hack-a-thon. Some features included physics based movement, item pickups, data scructured inventory, and enemy AI.",
		vidSrc: "https://giant.gfycat.com/SaneDisguisedChital.mp4"
	},
  {
    label: "Hairspray",
    description: "A MERN stack application to make hair salon appointments, pay in advance via Stripe API, recieve reminders via Twilio API, and submit feedback",
    vidSrc: "https://giant.gfycat.com/HeftyScalyInvisiblerail.mp4"
  },
	{
		label: "Shattered Iron",
		description: "A vehicle combat shooter inspired by Twisted Metal, also for a 24 hour Hack-a-thon. Key features include projectile collisions, raycasts, enemy point based navigation AI, and physics based vehicle movement.",
		vidSrc: "https://giant.gfycat.com/ScrawnyGrandioseHeterodontosaurus.mp4"
	},
	{
		label: "GiveMeMyMoney",
		description: "A MERN stack app, where my primary role was that of a Project Manager. Supervised a team of 4, overseeing pull requests, assisting with deployment, and managing agile workflow.",
		vidSrc: "https://giant.gfycat.com/SphericalTanHerculesbeetle.mp4"
	},
  {
    label: "Tetris Clone",
    description: "A Tetris clone made in pure CSS, HTML, JavaScript, and HTML Canvas.",
    vidSrc: "https://giant.gfycat.com/FeistyDescriptiveEyas.mp4"
  },
	{
		label: "LambdaHairSchool",
		description: "A React/Django app, with my role being Project Manager. I led a team of 4 developers, supervised GitHub pull requests, provided support when needed, and solved problems when hitting walls.",
		vidSrc:
			"https://giant.gfycat.com/JubilantImpressiveDanishswedishfarmdog.mp4"
	},
];

const styles = theme => ({
	root: {
		maxWidth: 700,
		flexGrow: 1,
		margin: "auto"
	},
	header: {
		display: "block",
		alignItems: "center",
		textAlign: "center ",
		height: 50,
		marginBottom: 0,
		backgroundColor: theme.palette.background.default
	},
	headerText: {
		fontWeight: 550
	},
	headerSubText: {

  },
	stepper: {
		height: "100%",
		overflow: "hidden"
	},
	video: {
		width: "100%"
	}
});

class Projects extends React.Component {
	state = {
		activeStep: 0
	};

	handleNext = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	handleBack = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	handleStepChange = activeStep => {
		this.setState({ activeStep });
	};

	render() {
		const { classes, theme } = this.props;
		const { activeStep } = this.state;

		const maxSteps = projects.length;

		return (
			<div className={classes.root}>
				<SwipeableViews
					className={classes.stepper}
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.activeStep}
					onChangeIndex={this.handleStepChange}
					enableMouseEvents
				>
					{projects.map(step => (
						<video
							autoplay
							loop
							playsinline
							muted
							key={step.label}
							className={classes.video + " home__carousel"}
						>
							<source src={step.vidSrc} type="video/mp4" />
						</video>
					))}
				</SwipeableViews>
        
					<Typography className={classes.headerText}>
						{projects[activeStep].label}
					</Typography>
					<Typography className={classes.headerSubText}>
						{projects[activeStep].description}
					</Typography>

				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					className={classes.mobileStepper}
					nextButton={
						<Button
							size="small"
							onClick={this.handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={this.handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</div>
		);
	}
}

Projects.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Projects);
