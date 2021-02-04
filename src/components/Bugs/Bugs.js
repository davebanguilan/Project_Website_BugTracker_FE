import React from 'react'
import { useSelector } from 'react-redux';
import Bug from './Bug/Bug';

import useStyles from './styles';

const Bugs = () => {
    const bugs = useSelector((state) => state.bugs);
    const classes = useStyles();

    console.log(bugs);
    
    return (
        <div>
            Bugs
            <Bug />
        </div>
    )
}

export default Bugs;
