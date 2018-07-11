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

class Favorites extends React.Component {
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
            <Typography className={classes.heading}>Games</Typography>
            <Typography className={classes.secondaryHeading}>
              Current Gen
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Top 5</Typography>
            <Typography>
              1. God of War 4 - PS4<br />
              2. Detroit: Become Human - PS4<br />
              3. Persona 5 - PS4<br />
              4. Overwatch - PC<br />
              5. Horizon: Zero Dawn - PS4
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Anime</Typography>
            <Typography className={classes.secondaryHeading}>
              Overall
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>No Specific Order +</Typography>
            <Typography>
              1. Boku no Hero Academia<br />
              2. Full Metal Alchemist: Brotherhood<br />
              3. One Punch Man<br />
              4. Haikyuu<br />
              5. A Place Beyond the Universe<br />
              6. Shokugeki no Soma<br />
              7. Re: Zero<br />
              8. Konosuba<br />
              9. Megalobox<br />
              10. SAO Alternative: GGO<br />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Movies</Typography>
            <Typography className={classes.secondaryHeading}>Recent</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>General</Typography>
            <Typography>
              1. Kimi no Na Wa<br />
              2. Avengers: Infinity War<br />
              3. Black Panther<br />
              4. IT<br />
              4. Rogue One<br />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Theme Park Rides
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Coaster and non-coaster
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>Top 5</Typography>
            <Typography>
              1. Forbidden Journey<br />
              2. Kraken<br />
              3. Flight of Passage<br />
              4. Revenge of the Mummy
              5. Manta
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Favorites);
