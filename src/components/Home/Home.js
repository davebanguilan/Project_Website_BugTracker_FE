import React, {useEffect, useState} from 'react';
import {Container, Grow, Grid, Button} from '@material-ui/core';
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
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBugs());
    }, [currentId, dispatch]);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Grow in>
                <Container>
                    <Grid className={classes.Btn_group} container justify="flex-end" >
                        <Button startIcon={<AddOutlinedIcon />} className={classes.Btn_createBug} variant="contained" onClick={handleOpen}>Create Bug</Button>
                        <Button startIcon={<BugReportOutlinedIcon />} className={classes.Btn_Bug} variant="contained">View Bugs</Button>
                        <Button startIcon={<DoneOutlineOutlinedIcon />} className={classes.Btn_completed} variant="contained">Completed</Button>
                    </Grid>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <Bugs setCurrentId={setCurrentId} handleOpen={handleOpen}/>
                        </Grid>
                        
                    </Grid>
                    <Modal className={classes.modal} open={open} onClose={handleClose}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} />
                    </Modal>
                </Container>
        </Grow>
    )
}

export default Home
