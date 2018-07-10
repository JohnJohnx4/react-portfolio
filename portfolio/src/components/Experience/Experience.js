import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
});

class Experience extends React.Component {
	state = {
		expanded: null
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

	render() {
		const { classes } = this.props;
		const { expanded } = this.state;

		return (
			<div className={classes.root}>
				<ExpansionPanel
					expanded={expanded === "panel1"}
					onChange={this.handleChange("panel1")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Lambda School</Typography>
						<Typography className={classes.secondaryHeading}>
							Software Developer
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							December 2017 – Current
						</Typography>
						<Typography>
              Participated in a 6 month, full-time CS fundamental and Software
							Development program.<br />
							Approached a majority of coding projects using pair programming.<br />
							Utilized agile software development and Git work flow on all
							projects.<br />
							Gained experience working with clients and understanding client
							demands.<br />
							Completed all curriculum course work including, and not limited
							to:<br />
							React, redux, Node.js, Express, MongoDB, mocha, chai, Python, and
							Django.<br />
							Hands on experience with client/server testing and CS
							fundamentals.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel2"}
					onChange={this.handleChange("panel2")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							SeaWorld Orlando
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Operations Host
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							June 2017 – May 2018
						</Typography>
						<Typography>
							Contributed in the reopening of the Kraken attraction with VR
							attachments.<br />
							Approached difficulties in opening a new attraction with
							flexibility.<br />
							Monitored functionality of VR devices to prevent nausea attributed
							with VR.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel3"}
					onChange={this.handleChange("panel3")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							Universal Studios Orlando
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Volcano Bay Concierge
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							August – October 2017
						</Typography>
						<Typography>
							Welcomed Guests and explained all features of their stay.<br />
							Assessed all situations in order to provide adequate recovery and
							Guest satisfaction.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel4"}
					onChange={this.handleChange("panel4")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Spectrum</Typography>
						<Typography className={classes.secondaryHeading}>
							Call Center
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							March – June 2017
						</Typography>
						<Typography>
							Provide technical support to customers calling in with technical
							issues.<br />
							Used critical thinking to solve customer issues, turning negative
							calls into positive outcomes.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel5"}
					onChange={this.handleChange("panel5")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							SeaWorld Orlando
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Operations Host
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							October 2014 – March 2017
						</Typography>
						<Typography>
							As a team, safely set a record number of dispatched coaster trains
							within one hour.<br />
							Provided outstanding Guest service while safely dispatching
							coaster trains with team.<br />
							Relayed information to Leaders and Maintenance to keep ride
							operation seamless.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel6"}
					onChange={this.handleChange("panel6")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>DisneyQuest</Typography>
						<Typography className={classes.secondaryHeading}>
							Attractions Host
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							February 16 – June 2016
						</Typography>
						<Typography>
							Safely operated different attractions within the indoor theme
							park.<br />
							Verified functionality of all arcade games and cabinets.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel7"}
					onChange={this.handleChange("panel7")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							Universal Studios Orlando
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Attractions Attendant
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							June – August 2015
						</Typography>
						<Typography>
							Provided immersive guest interactions in the Harry Potter
							universe.<br />
							Maintained the safety of every Guest.<br />
							Worked efficiently as a team to meet goals.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel8"}
					onChange={this.handleChange("panel8")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Fit2Run</Typography>
						<Typography className={classes.secondaryHeading}>
							Footwear Associate
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							November 2014 – February 2015
						</Typography>
						<Typography>
							Met the needs of walkers and runners of all levels with excellent
							product knowledge.<br />
							Met daily sales goals for different products through efficient
							sales techniques.<br />
							Anticipated customer needs , providing solutions to give customers
							extensive choices.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel9"}
					onChange={this.handleChange("panel9")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							Epcot – Walt Disney World
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Main Entrance Coordinator
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							March 2012 - October 2014
						</Typography>
						<Typography>
							Led Cast Members through daily operation, supporting them with
							breaks and training.<br />
							Maintained communication throughout entire team to achieve common
							goals.<br />
							Made quick, decisive actions to deal with urgent situations
							(first-aid, conflicts, etc.).<br />
							Worked with Leaders to meet labor goals while keeping areas
							efficiently staffed.<br />
							Partnered with all lines of business in order to create seamless
							experiences, including Guest recovery.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					expanded={expanded === "panel10"}
					onChange={this.handleChange("panel10")}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							Epcot – Walt Disney World
						</Typography>
						<Typography className={classes.secondaryHeading}>
							Main Entrance Trainer
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography className={classes.heading}>
							October 2010 – March 2012
						</Typography>
						<Typography>
							Worked alongside Cast Members and Leaders to provide unparalleled
							Guest Service.<br />
							Communicated new and upcoming procedures efficiently to Cast
							Members.<br />
							Provided incoming Cast Members with the knowledge and tools
							necessary for success.<br />
							Facilitated in the training of over 200 Cast Members,
							Coordinators, and Leaders (up to and Park Vice-President) when
							switching to brand new entrance experience.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

Experience.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
