import React, {useEffect} from 'react';
import {Container, Grow, Grid, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getBugs } from '../../actions/bugs';

import Form from '../Form/Form';
import Bugs from '../Bugs/Bugs';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBugs());
    }, [dispatch]);



    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <Bugs />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home
