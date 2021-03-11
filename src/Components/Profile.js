// @flow
import * as React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useRouteMatch} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useContext} from "react";
import {UsersContext} from "../Context/UsersContext";
import {FETCH_PROFILE, TOOGLE_LOADER} from "../Context/UsersReducer";
import {Loader} from "./Loader";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex'
    },
    alignCenter: {
        alignItems: 'center'
    },
    large: {
        width: '100px',
        height: '100px',
    },
    avatarWrap: {
        marginRight: '20px'
    },
    profileInfo: {
        textAlign: 'left'
    },
    profileCard: {
        // border: '1px solid #ccc',
        padding: '10px',
        background: '#fff',
    },
    pageProfile: {
        background: '#ddd',
        height: '100vh',
    }
}));

export function Profile(props) {
    const classes = useStyles()
    const history = useRouteMatch()
    const {state, dispatch} = useContext(UsersContext);
    const {avatar_url, location, name, created_at} = state.profileInfo
    useEffect(() => {
        profileRequest(history.params.userName)
    }, [])

    const profileRequest = async (login) => {
        try {
            dispatch({
                type: TOOGLE_LOADER,
                payload: true
            })
            const res = await axios.get('https://api.github.com/users/' + login)
            dispatch({
                type: FETCH_PROFILE,
                payload: res.data
            })
        } catch {
            dispatch({
                type: TOOGLE_LOADER,
                payload: false
            })
            throw new Error('Что-то пошло не так!');
        }
    }

    return (
        <>
            {
                state.loading ? <Loader/> : <div className={classes.pageProfile}>
                    <Container>
                        <Typography variant="h2">Profile Page</Typography>
                        <div className={`${classes.flex} ${classes.alignCenter} ${classes.profileCard}`}>
                            <div className={classes.avatarWrap}>
                                <Avatar alt="Cindy Baker" className={classes.large} src={avatar_url}/>
                            </div>
                            <div className={classes.profileInfo}>
                                <Typography variant="h4">{name}</Typography>
                                <Typography variant="h6">{location}</Typography>
                                <Typography variant="subtitle1">{new Date(created_at).toLocaleDateString()}</Typography>
                            </div>
                        </div>
                    </Container>
                </div>

            }
        </>


    )
}