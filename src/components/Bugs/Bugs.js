import React from 'react'
import {Grid, CircularProgress, Container } from '@material-ui/core'
import { useSelector } from 'react-redux';
import Bug from './Bug/Bug';

import useStyles from './styles';

const Bugs = ({setCurrentId, handleOpen}) => {
    const bugs = useSelector((state) => state.bugs);
    const classes = useStyles();

    console.log(bugs);
    
    return (
        !bugs.length ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
        </div>) : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {bugs.map((bug) => (
                    <Grid key={bug.id} item xs={12} sm={6}>
                        <Bug bug={bug} setCurrentId={setCurrentId} handleOpen={handleOpen} />
                    </Grid>
                ))}
                <Container className={classes.mainContainer} >
                
                </Container>
            </Grid>
            
        )
    )
}

export default Bugs;
