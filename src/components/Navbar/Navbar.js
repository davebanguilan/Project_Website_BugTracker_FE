import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';


import bug from '../../images/bug.png';

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    // const user = {
    //     result: {
    //         name: "Dave Banguilan"
    //     }
    // };
    const user = null;

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <div className={classes.brandContainer}>
                    <img className={classes.image} src={bug} alt="Bug Tracker" height="60" width="60"/>
                    <Typography className={classes.heading} component={Link} to="/" variant='h2' >BugTracker</Typography>
                </div>
                <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.blue} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">
                        Sign In
                    </Button>
                )}
                </Toolbar>
            </AppBar>

            
        </>
    )
}

export default Navbar;
