import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Favorites from "./Favorites";
import Hobbies from "./Hobbies";
import Friends from "./Friends";
// import Lambda from "./Lambda";


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    maxWidth: "900px",
    margin: "auto",
    flexGrow: 1
  }
};

class AbutPage extends React.Component {
  state = {
    value: "one"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root + ' about__container'}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value="one" label="About Me" />
          <Tab value="two" label="Favorites" />
          <Tab value="three" label="Hobbies" />
          <Tab value="four" label="Friends" />
          {/* <Tab value="five" label="Lambda School" /> */}
        </Tabs>
        {value === "one" && <TabContainer><About /></TabContainer>}
        {value === "two" && <TabContainer><Favorites /></TabContainer>}
        {value === "three" && <TabContainer><Hobbies /></TabContainer>}
        {value === "four" && <TabContainer><Friends /></TabContainer>}
        {/* {value === "five" && <TabContainer><Lambda /></TabContainer>} */}
      </Paper>
    );
  }
}

AbutPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AbutPage);
