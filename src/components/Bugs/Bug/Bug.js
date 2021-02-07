import React from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

import moment from 'moment';
import useStyles from './styles.js';

const Bug = ({bug}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div className={classes.media}></div>
            <div className={classes.overlay}>
                <Typography variant="h5">{bug.title}</Typography>
                <Typography variant="body2">{moment(bug.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'black'}} size="small" onClick={()=>{}}>
                    <EditIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="subtitle2" color="textSecondary">Members: </Typography>
                <Typography variant="subtitle2" color="textSecondary">{bug.members.map((member, i) => bug.members.length === i + 1 ? `${member}` : `${member}, `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.creator}>{bug.creator}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" onClick={()=>{}}>
                    <DeleteIcon />
                    Delete  
                </Button>
            </CardActions>
        </Card>
    )
}

export default Bug;
