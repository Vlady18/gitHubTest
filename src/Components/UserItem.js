// @flow
import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    flex: {
      display: 'flex'
    },
    alignCenter: {
      alignItems: 'center'
    },
    userItemWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 0px',
        borderBottom: '1px solid #ccc'
    },
    avatarWrap: {
        marginRight: '20px'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export function UserItem({userObj}) {
    const {avatar_url, login, html_url} = userObj;
    const classes = useStyles();

    return (

        <div className={classes.userItemWrap}>
            <div className={`${classes.flex} ${classes.alignCenter}`}>
                <div className={classes.avatarWrap}>
                    <NavLink to={'/profile/' + login}>
                        <Avatar alt="Cindy Baker" className={classes.large} src={avatar_url}/>
                    </NavLink>
                </div>
                <div className="">
                    <Typography variant="h6" gutterBottom>{login}</Typography>
                </div>
            </div>
            <div className="">
                <Button variant="contained" color="primary" href={html_url} target="_blank">
                    Перейти
                </Button>
            </div>
        </div>
    );
};