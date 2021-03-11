// @flow
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    loaderWrap: {
       position: 'fixed',
        top: '50%',
        left: '50%'
    },
}));

export const Loader = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.loaderWrap}>
            <CircularProgress disableShrink />
        </div>
    );
};