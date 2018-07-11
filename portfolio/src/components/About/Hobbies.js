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

const hobbies = [
  {
    label: "Playing video games",
    imgPath: "https://media.giphy.com/media/3oKIP7Lc3lXnYAAjo4/giphy.gif"
  },
  {
    label: "Coding personal projects",
    imgPath: "https://media.giphy.com/media/ioTwe7wi09iYU/giphy.gif"
  },
  {
    label: "Fiddling with games in Unity",
    imgPath: "https://media.giphy.com/media/QfHm9FOBwVKhduavWE/giphy.gif"
  },
  {
    label: "Spending time with friends and family",
    imgPath: "https://media.giphy.com/media/X7rR2FDy8OoPvuRcfl/giphy.gif"
  },
  {
    label: "Lifting and working out",
    imgPath: "https://media.giphy.com/media/2aSreSCrFMlXY53qJ7/giphy.gif"
  }
];

const styles = theme => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    margin: "auto"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 0,
    backgroundColor: theme.palette.background.default
  },
  img: {
    maxWidth: 700,
    margin: "auto",
    overflow: "hidden",
    width: "100%"
  },
  stepper: {
    height: 300,
    overflow: "hidden"
  }
});

class Hobbies extends React.Component {
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

    const maxSteps = hobbies.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{hobbies[activeStep].label}</Typography>
        </Paper>
        <SwipeableViews
          className={classes.stepper}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {hobbies.map(step => (
            <img
              key={step.label}
              className={classes.img}
              src={step.imgPath}
              alt={step.label}
            />
          ))}
        </SwipeableViews>
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

Hobbies.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Hobbies);
