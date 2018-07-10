import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Experience extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Lambda School</Typography>
            <Typography className={classes.secondaryHeading}>December 2017 – Current</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Software Developer</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>SeaWorld Orlando</Typography>
            <Typography className={classes.secondaryHeading}>June 2017 – May 2018</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Operations Host</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Universal Studios Orlando</Typography>
            <Typography className={classes.secondaryHeading}>August – October 2017</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Volcano Bay Concierge</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        

        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Spectrum</Typography>
            <Typography className={classes.secondaryHeading}>March – June 2017</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Call Center </Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>SeaWorld Orlando</Typography>
            <Typography className={classes.secondaryHeading}>October 2014 – March 2017</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Operations Host</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>DisneyQuest</Typography>
            <Typography className={classes.secondaryHeading}>February 16 – June 2016</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Attractions Host</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Universal Studios Orlando</Typography>
            <Typography className={classes.secondaryHeading}>June – August 2015</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Attractions Attend</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Fit2Run</Typography>
            <Typography className={classes.secondaryHeading}>November 2014 – February 2015</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Footwear Associate</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Epcot – Walt Disney World</Typography>
            <Typography className={classes.secondaryHeading}>March 2012 - October 2014</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Main Entrance Coordinator</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Epcot  – Walt Disney World</Typography>
            <Typography className={classes.secondaryHeading}>October 2010 – March 2012</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Main Entrance Trainer</Typography>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
