import React from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import moment from 'moment';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';

import { deleteBug } from '../../../actions/bugs';

const Bug = ({bug, setCurrentId, handleOpen}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    

    return (
        <Card className={classes.card}>
            <div className={classes.media}>

            </div>
            <div className={classes.overlay}>
                <Typography variant="h4">{bug.title}</Typography>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: '10px'
                }}>
                
                    <ScheduleOutlinedIcon/>
                    &nbsp;
                    <Typography variant="h6">{moment(bug.createdAt).fromNow()}</Typography>

                </div>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'blue'}} size="small" onClick={() => {
                    handleOpen();
                    setCurrentId(bug._id);
                }}>
                    <EditIcon fontSize="default" />
                </Button>
                
            </div>
            <CardContent>
                <Typography variant="h5" className={classes.creator}>{bug.creator}</Typography>
                <div className={classes.details}>
                    <Typography variant="h6" color="textSecondary">Members: </Typography>
                    <Typography variant="h6" >{bug.members.map((member, i) => bug.members.length === i + 1 ? `${member}` : `${member}, `)}</Typography>
                    <div>
                        <Typography display="inline" variant="h6" color="textSecondary">Severity: </Typography>
                        <Typography display="inline" variant="h6" style={{color: bug.severity === "High" ? "red" : "textSecondary" }}>{bug.severity}</Typography>
                    </div>
                    <div>
                    <Typography display="inline" variant="h6" color="textSecondary">Status: </Typography>
                    <Typography display="inline" variant="h6" style={{color: bug.status === "Completed" ? "green" : "textSecondary" }}>{bug.status}</Typography>
                    </div>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6" color="textSecondary">Description: </Typography>
                    <Typography variant="h6">{bug.description}</Typography>
                </div>
            </CardContent>
            
            <CardActions>
                <Button size="small" color="secondary" onClick={()=> dispatch(deleteBug(bug._id))}>
                    <DeleteIcon />
                    Delete  
                </Button>
            </CardActions>
        </Card>
    )
}

export default Bug;
