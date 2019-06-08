import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {
  EmailIcon,
  PhoneIcon,
  // BookmarkOutlineIcon,
  GithubBoxIcon,
  LinkedinBoxIcon,
  FileDocumentIcon
} from 'mdi-react';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
	},
	link: {
		textDecoration: 'underline'
	}
});

function ContactList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button component='a' href='mailto:contactme@johnpcorreia.com'>
          <ListItemIcon className='contact__icon'>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText className='contact__title' primary='Email' />
          <Typography className={classes.link + ' contact__text'}>
            johnpaulcorreia@gmail.com
          </Typography>
        </ListItem>

        <ListItem button component='a' href='https://github.com/JohnJohnx4'>
          <ListItemIcon className='contact__icon'>
            <GithubBoxIcon />
          </ListItemIcon>
          <ListItemText className='contact__title' primary='Github' />
          <Typography className={classes.link + ' contact__text'}>
            github.com/JohnJohnx4
          </Typography>
        </ListItem>

        <ListItem
          button
          component='a'
          href='https://www.linkedin.com/in/john-correia/'
        >
          <ListItemIcon className='contact__icon'>
            <LinkedinBoxIcon />
          </ListItemIcon>
          <ListItemText className='contact__title' primary='LinkedIn' />
          <Typography className={classes.link + ' contact__text'}>linkedin.com/in/john-correia/</Typography>
        </ListItem>

        <ListItem
          button
          component='a'
          href='https://drive.google.com/open?id=1zoDCfg3luq_ojJKeulIw82jZ6npX7Zo6'
        >
          <ListItemIcon className='contact__icon'>
            <FileDocumentIcon />
          </ListItemIcon>
          <ListItemText className='contact__title' primary='Resume' />
          <Typography className={classes.link + ' contact__text'}>drive.google.com/open...</Typography>
        </ListItem>
      </List>
    </div>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactList);
