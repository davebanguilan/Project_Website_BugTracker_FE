import React from 'react'
import {Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import Bug from './Bug/Bug';

import useStyles from './styles';

const Bugs = () => {
    const bugs = useSelector((state) => state.bugs);
    const classes = useStyles();

    console.log(bugs);
    
    return (
        !bugs.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {bugs.map((bug) => (
                    <Grid key={bug.id} item xs={12} sm={6}>
                        <Bug bug={bug} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Bugs;
