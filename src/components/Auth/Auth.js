import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Paper, Grid, Typography, Container, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import Input from "./Input";
import Icon from "./Icon";

import useStyles from './styles';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { signin, signup } from "../../actions/auth";   

import { GoogleLogin } from "react-google-login";   
const { REACT_APP_GOOGLEID } = process.env;

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
          dispatch(signup(formData, history));
          setOpen(true);
        } else {
          dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
          dispatch({ type: "AUTH", data: { result, token } });
          history.push("/");
        } catch (error) {
          console.log(error);
        }
      };
      const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign was Unsuccessful. Try again later ");
      };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autofocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}  
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        
                        {isSignUp && (
                            <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                        )}
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary" >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin clientId={REACT_APP_GOOGLEID}
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp
                            ? "Already have an account? Sign In"
                            : "Don't have an account? Sign Up"}
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert variant="filled" onClose={handleClose} severity="success">
                    Account Created Successfully!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Auth
