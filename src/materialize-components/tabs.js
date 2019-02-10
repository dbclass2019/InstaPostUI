import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ChatsDisplay from '../home/chats-display'
import ContactsDisplay from '../home/contacts-display'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper, //background of tab content

  },
  scrollButtons: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  tabFont: {
    fontSize: 15,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (

      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" className={classes.scrollButtons} value={value} onChange={this.handleChange}>
              <LinkTab className={classes.tabFont} label="Newsfeed" />
              <LinkTab className={classes.tabFont} label="Chats" />
              <LinkTab className={classes.tabFont} label="My Posts" />
              <LinkTab className={classes.tabFont} label="Contacts" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Newsfeed</TabContainer>}
          {value === 1 && <TabContainer><ChatsDisplay/></TabContainer>}
          {value === 2 && <TabContainer>My Posts grid</TabContainer>}
          {value === 3 && <TabContainer><ContactsDisplay/></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);