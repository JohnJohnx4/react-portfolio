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
    margin: "10px",
    padding: "10px 0"
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
      <div className={classes.root + " experience__container"}>
        <ExpansionPanel
          expanded={expanded === "panel11"}
          onChange={this.handleChange("panel11")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading + " experience__header"}>
              Brilliance Labs
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Software Developer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              September 2018 – Currently Employed
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Flexibly building apps and software for startups using tools and tech both experienced and inexperienced with. 
			  Currently involved with hybrid app development with Ionic,  Angular 7, and writing microservices with Google Cloud Functions. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel12"}
          onChange={this.handleChange("panel12")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading + " experience__header"}>
              Lambda School
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
             Teaching Assistant
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              July 2018 - August 2018
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
				Acted as a Project Manager for 3 teams of 4 students each for their final projects. Provided direction, 
				monitored team workflow, and supervised GitHub source control.
				Worked to deploy full stack web applications with team. Provided interview practice, contribution reviews, 
				and 1:1 feedback for all students.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading + " experience__header"}>
              Lambda School
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
             Student
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              December 2017 – July 2018
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Completed a 6 month, full-time Full Stack Web Development program.
              <br />
              Approached a majority of coding projects using pair programming.
              <br />
              Utilized agile software development and Git work flow on all
              projects.
              <br />
              Gained experience working with clients and understanding client
              demands.
              <br />
              Completed all curriculum course work including, and not limited
              to:
              <br />
              React, redux, Node.js, Express, MongoDB, mocha, chai, Python, and
              Django.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              SeaWorld Orlando
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Operations Host
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              June 2017 – May 2018
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Contributed in the reopening of the Kraken attraction with VR
              attachments.
              <br />
              Approached difficulties in opening a new attraction with
              flexibility.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              Universal Studios Orlando
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Volcano Bay Concierge
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              August – October 2017
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Welcomed Guests and explained all features of their stay.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              Spectrum
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Call Center
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              March – June 2017
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Provide technical support to customers calling in with technical
              issues.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              SeaWorld Orlando
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Operations Host
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              October 2014 – March 2017
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              As a team, safely set a record number of dispatched coaster trains
              within one hour.
              <br />
              Provided outstanding Guest service while safely dispatching
              coaster trains with team.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              DisneyQuest
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Attractions Host
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              February 16 – June 2016
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Safely operated different attractions within the indoor theme
              park.
              <br />
              Verified functionality of all arcade games and cabinets.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={this.handleChange("panel7")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading + " experience__header"}>
              Universal Studios Orlando
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Attractions Attendant
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              June – August 2015
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Provided immersive guest interactions in the Harry Potter
              universe.
              <br />
              Maintained the safety of every Guest.
              <br />
              Worked efficiently as a team to meet goals.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel8"}
          onChange={this.handleChange("panel8")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading + " experience__header"}>
              Fit2Run
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Footwear Associate
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              November 2014 – February 2015
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Met the needs of walkers and runners of all levels with excellent
              product knowledge.
              <br />
              Met daily sales goals for different products through efficient
              sales techniques.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              Epcot – Walt Disney World
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Main Entrance Coordinator
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              March 2012 - October 2014
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Led Cast Members through daily operation, supporting them with
              breaks and training.
              <br />
              Maintained communication throughout entire team to achieve common
              goals.
              <br />
              Made quick, decisive actions to deal with urgent situations
              (first-aid, conflicts, etc.).
              <br />
              Worked with Leaders to meet labor goals while keeping areas
              efficiently staffed.
              <br />
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
            <Typography className={classes.heading + " experience__header"}>
              Epcot – Walt Disney World
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Main Entrance Trainer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading + " experience__header"}>
              October 2010 – March 2012
            </Typography>
            <Typography
              className={classes.secondaryHeading + " experience__subheader"}
            >
              Worked alongside Cast Members and Leaders to provide unparalleled
              Guest Service.
              <br />
              Communicated new and upcoming procedures efficiently to Cast
              Members.
              <br />
              Provided incoming Cast Members with the knowledge and tools
              necessary for success.
              <br />
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