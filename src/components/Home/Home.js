import React, {useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getBugs } from '../../actions/bugs';

import Form from '../Form/Form';
import Bugs from '../Bugs/Bugs';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBugs());
    }, [dispatch]);

    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Bugs />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home
