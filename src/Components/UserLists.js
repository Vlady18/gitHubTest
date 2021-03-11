// @flow
import * as React from 'react';
import Container from '@material-ui/core/Container';
import {UserItem} from "./UserItem";
import {useContext} from "react";
import {UsersContext} from "../Context/UsersContext";
import {Loader} from "./Loader";
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    paginationWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },
    userListWrap: {
        overflowY: 'auto'
    },
    pageWrap: {
        overflow: 'hidden',
        padding: '20px'
    }
}));
export const UserLists = (props) => {
    const classes = useStyles();

    const {state, userRequest} = useContext(UsersContext);

    const {loading, users, pageSize} = state;

    const [page, setPage] = React.useState(1);

    const pageCount = Math.ceil(30 / pageSize);

    const handleChange = (event, value) => {
        setPage(value);
        const perPage = value * pageSize - 5;
        userRequest(perPage)
    }

    return (
        <div className={classes.pageWrap}>
            {loading
                ? <Loader/>
                : <>
                    <div className={classes.usersLists}>
                        <Container>
                            <div className={classes.userListWrap}>
                                {
                                    users.map((el, i) => <UserItem
                                        userObj={el}
                                        key={i}
                                    />)
                                }
                            </div>
                            <div className={classes.paginationWrap}>
                                <Pagination page={page} count={pageCount} color="primary" onChange={handleChange}/>
                            </div>
                        </Container>
                    </div>
                </>
            }
        </div>
    );
};