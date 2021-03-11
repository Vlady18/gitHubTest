// @flow
import * as React from 'react';
import {createContext} from "react";
import {useReducer} from "react";
import {FETCH_USERS, TOOGLE_LOADER, usersReducer} from "./UsersReducer";
import axios from "axios";
import {useEffect} from "react";

export const UsersContext = createContext()


export function ListContextProvider(props) {

    const [state, dispatch] = useReducer(usersReducer, {
        users: [],
        loading: true,
        pageSize: 5,
        profileInfo: {},
    })

    const userRequest = async (per = 0) => {
        try{
            dispatch({
                type: TOOGLE_LOADER,
                payload: true
            })
            const res = await axios.get(`https://api.github.com/users?since=${per}&per_page=${state.pageSize}`);
            dispatch({
                type: FETCH_USERS,
                payload: res.data,
            })
        }
        catch (e) {
            dispatch({
                type: TOOGLE_LOADER,
                payload: false
            })
            // console.log()
            throw new Error('Что-то пошло не так!');
        }

    }

    useEffect(() => {
        userRequest()
    }, [])

    return (
        <UsersContext.Provider value={{state, userRequest, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    );
};