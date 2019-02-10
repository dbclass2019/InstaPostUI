import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    bigAvatar: {
        margin: 10,
        width: 80,
        height: 80,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <Avatar alt="Remy Sharp" src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" className={classes.bigAvatar} />
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);