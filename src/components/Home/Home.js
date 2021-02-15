import React, {useEffect, useState} from 'react';
import {Container, Grow, Grid, Button, Paper, Typography, Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';

import { getBugs } from '../../actions/bugs';

import Bugs from '../Bugs/Bugs';
import useStyles from './styles';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';

import Modal from '@material-ui/core/Modal';
import Form from '../Form/Form';


const Home = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        dispatch(getBugs());
    }, [currentId, dispatch]);
    
    const notificationClose = () => {
        setNotifOpen(false);
    };

    const notificationOpen = (checkNew) => {
        setIsNew(checkNew);
        setNotifOpen(true);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Grow in>
            {
                !user?.result?.name ? (
                    <Paper className={classes.paper} style={{margin: "100px 0"}}>
                        <Typography variant="h6" align="center">
                            BugTracker is a Bug Tracking web application wherein you can track and fix your bugs on your projects.
                        </Typography>
                        <Typography variant="h6" align="center">
                            Sign in to use it! Just click the "SIGN IN" button on the top right of the navigation bar.
                        </Typography>
                        <Typography variant="h5" align="center" style={{margin: "20px 0"}}>
                            &copy; Dave Banguilan 2021
                        </Typography>

                    </Paper>
                ) : (
                    <Container>
                    <Grid className={classes.Btn_group} container justify="flex-end" >
                        <Button startIcon={<AddOutlinedIcon />} className={classes.Btn_createBug} variant="contained" onClick={handleOpen}>Create Bug</Button>
                        <Button startIcon={<BugReportOutlinedIcon />} className={classes.Btn_Bug} variant="contained">View Bugs</Button>
                        <Button startIcon={<DoneOutlineOutlinedIcon />} className={classes.Btn_completed} variant="contained">Completed</Button>
                    </Grid>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <Bugs setCurrentId={setCurrentId} handleOpen={handleOpen} />
                        </Grid>
                        
                    </Grid>
                    <Modal className={classes.modal} open={open} onClose={handleClose}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} notificationOpen={notificationOpen} />
                    </Modal>
                </Container>
                )
            }
        </Grow>
        <Snackbar open={notifOpen} autoHideDuration={4000} onClose={notificationClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" onClose={notificationClose} severity="success">
                {isNew ? "New Bug Created!" : "Bug Updated Successfully!"}
            </Alert>
        </Snackbar>
        </>
    )
}

export default Home
