import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';    
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";


import bug from '../../images/bug.png';

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/auth");

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        
        setUser(JSON.parse(localStorage.getItem("profile")));
      }, [location]);

      console.log(user);
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
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
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
